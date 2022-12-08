import { Init } from './funcionario.init';
import { Funcionario } from './../model/funcionario';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService extends Init {
  constructor() {
    super();
    console.log('FuncionarioService Works');
    this.load();
  }

  listarTodos = () => {
    // const funcionarios = this.window.sessionStorage.getItem('funcionarios');
    const funcionarios = localStorage['funcionarios'];
    return funcionarios ? JSON.parse(funcionarios) : [];
  };

  cadastrar = (funcionario: Funcionario) => {
    const funcionarios = this.listarTodos();
    // funcionario.id = String(new Date().getSeconds() + Math.random())
    //   .split('.')
    //   .join('');
    funcionario.id = new Date().getDate();

    funcionarios.push(funcionario);

    // this.window.sessionStorage.setItem(
    // 'funcionarios',
    // JSON.stringify(funcionarios)
    // );
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  };

  buscarPorId = (idFuncionario: Funcionario['id']) => {
    const funcionarios = JSON.parse(localStorage.getItem('funcionarios')!);

    for (let i = 0; i < funcionarios.length; i++) {
      if (funcionarios[i].id === idFuncionario) {
        return funcionarios[i];
      }
    }

    // const funcionarios: Funcionario[] = this.listarTodos();

    // return list.find((funcionario: Funcionario) => {
    //   funcionario.id === idFuncionario;
    // });
  };

  atualizar = (funcionario: Funcionario) => {
    const funcionarios: Funcionario[] = this.listarTodos();
    // const funcionarios: Funcionario[] = JSON.parse(
    //   localStorage.getItem('funcionarios')!
    // );

    funcionarios.forEach((value, index, array) => {
      if (funcionario.id === value.id) {
        array[index] = funcionario;
      }
    });

    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  };

  remover = (idFuncionario: Funcionario['id']) => {
    let funcionarios: Funcionario[] = this.listarTodos();

    funcionarios = funcionarios.filter(
      (funcionario) => funcionario.id !== idFuncionario
    );

    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  };
}
