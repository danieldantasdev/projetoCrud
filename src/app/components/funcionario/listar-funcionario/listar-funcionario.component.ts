import { FuncionarioService } from './../../../services/funcionario.service';
import { Funcionario } from './../../../model/funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'senac-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.scss'],
})
export class ListarFuncionarioComponent implements OnInit {
  funcionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.funcionarios = this.listarTodos();

    // this.funcionarios = [new Funcionario(1, 'nome'), new Funcionario(1, 'nome')];
    // this.funcionarios = [
    //   {
    //     id: '123456789',
    //     nome: 'Daniel',
    //   },
    //   {
    //     id: '567890',
    //     nome: 'Evellin',
    //   },
    // ];
  }

  listarTodos = (): Funcionario[] => {
    return this.funcionarioService.listarTodos();
  };

  remover = ($event: any, funcionario: Funcionario) => {
    $event.preventDefault();

    if (confirm('deseja mesmo remover ' + funcionario.nome + ' ?')) {
      this.funcionarioService.remover(funcionario.id);
      this.funcionarios = this.funcionarioService.listarTodos();
    }
  };
}
