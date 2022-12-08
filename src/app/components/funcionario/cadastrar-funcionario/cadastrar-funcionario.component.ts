import { FuncionarioService } from './../../../services/funcionario.service';
import { Funcionario } from './../../../model/funcionario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'senac-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.scss'],
})
export class CadastrarFuncionarioComponent implements OnInit {
  @ViewChild('formFuncionario') formFuncionario!: NgForm;
  funcionario: Funcionario = { id: 0, nome: '' };

  constructor(
    private funcionarioService: FuncionarioService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.funcionario = { id: 0, nome: '' };
  }

  cadastrar = () => {
    if (this.formFuncionario.form.valid) {
      this.funcionarioService.cadastrar(this.funcionario);
      this._router.navigate(['/funcionarios/listar']);
    }
  };
}
