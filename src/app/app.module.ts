import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioComponent } from './components/funcionario/funcionario.component';
import { FuncionarioModule } from './components/funcionario/funcionario.module';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FuncionarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
