import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmployeeGateway} from "../../domain/model/employee/gateway/employee.gateway";
import {EmployeeService} from "../../infrastructure/driver-adpter/employee/employee.service";
import {DomainModule} from "../../domain/usesCases/domain.module";
import {AddEmployeeComponent} from "./list-employee/add-employee/add-employee.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ListEmployeeComponent } from './list-employee/list-employee.component';


// @ts-ignore
@NgModule({
  declarations: [AddEmployeeComponent, ListEmployeeComponent],// Declaro mi componente "Es normal"
  imports: [
    CommonModule,
    DomainModule, // Le estoy diciendo a mi component que me utilice todos los casos de uso que estan el domain
    HttpClientModule
  ],
  exports: [AddEmployeeComponent, ListEmployeeComponent], // Exporto componente para poder acceder a él a través de otros
  providers: [
    {provide: EmployeeGateway, useClass: EmployeeService} // provide para que reconozca que este  EmployeeGateway me
    // tiene que utilizar este servicio EmployeeService
  ]
})
export class ComponentsModule {
}
