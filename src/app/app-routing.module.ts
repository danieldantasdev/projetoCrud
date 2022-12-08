import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioComponent } from './components/funcionario/funcionario.component';

const routes: Routes = [
  {
    path: 'funcionarios',
    loadChildren: () =>
      import('./components/funcionario/funcionario.module').then(
        (m) => m.FuncionarioModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
