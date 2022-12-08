import { Funcionario } from 'src/app/model/funcionario';

export class Init {
  load() {
    if (
      localStorage.getItem('funcionarios') === null ||
      localStorage.getItem('funcionarios') === undefined ||
      localStorage.getItem('funcionarios') === ''
    ) {
      console.log('Não encontrou funcionários... Criando...');
      let funcionarios: Funcionario[] = [
        {
          id: 1,
          nome: 'Daniel',
        },
        {
          id: 2,
          nome: 'Eve',
        },
        {
          id: 3,
          nome: 'Renata',
        },
      ];

      localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
      return;
    } else {
      console.log('Não encontrou funcionários...');
    }
  }
}
