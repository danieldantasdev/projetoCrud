import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';

@NgModule({
  declarations: [
    ListarFuncionarioComponent,
    CadastrarFuncionarioComponent,
    EditarFuncionarioComponent,
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FuncionarioRoutingModule, FormsModule, ReactiveFormsModule],
})
export class FuncionarioModule {}
