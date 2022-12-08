import { FuncionarioService } from './../../../services/funcionario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Funcionario } from 'src/app/model/funcionario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'senac-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.scss'],
})
export class EditarFuncionarioComponent implements OnInit {
  @ViewChild('formFuncionario', { static: true }) formFuncionario!: NgForm;
  funcionario!: Funcionario;
  form!: FormGroup;

  constructor(
    private funcionarioService: FuncionarioService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    const id = +this._route.snapshot.params['id'];
    //primeiro jeito de achar um funcionaŕio pelo id
    this.funcionario = this.funcionarioService.buscarPorId(id)!;

    //segundo jeito de achar um funcionaŕio pelo id
    let funcionarios: Funcionario[] = this.funcionarioService.listarTodos();
    let funcionario = funcionarios.find((p) => p.id == id);

    this.form = this._formBuilder.group({
      id: [id, Validators.required],
      nome: ['', Validators.required],
    });
  }

  // atualizar = () => {
  //   if (this.formFuncionario.form.valid) {
  //     this.funcionarioService.atualizar(this.funcionario);
  //     this._router.navigate(['/funcionarios/listar']);
  //   }
  // };

  get formControls() {
    return this.form.controls;
  }

  onSubmit = () => {
    if (this.form.valid) {
      this.funcionarioService.atualizar(this.form.value);
      console.log(this.form.value);
      this._router.navigate(['/funcionarios/listar']);
    }
  };
}
