import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { CalculatorComponent } from './calculator/calculator.component';

const routes: Routes = [
  { path: 'cadastro', component: FormularioComponent },
  { path: 'calcular', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
