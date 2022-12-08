import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'funcionarios/listar' },
  { path: 'funcionarios/listar', component: ListarFuncionarioComponent },
  { path: 'funcionarios/cadastrar', component: CadastrarFuncionarioComponent },
  { path: 'funcionarios/editar/:id', component: EditarFuncionarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionarioRoutingModule {}
