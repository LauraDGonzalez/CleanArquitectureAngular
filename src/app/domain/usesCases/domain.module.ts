import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeUsecase} from "./employee/employee.usecase";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[EmployeeUsecase] // Acá declaro para que lo pueda reconocer en los otros lados
  // Tambien se podría importar ese caso de uso en app.module.ts para que quede más general pero esa no es la funcionalidad
  // de cada capa

  //providers para que el caso de uso EmployeeUsecase me lo exporte a través de  DomainModule
})
export class DomainModule { }
