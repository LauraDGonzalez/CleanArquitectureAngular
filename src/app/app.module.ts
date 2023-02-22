import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './ui/components/list-employee/add-employee/add-employee.component';
import {ComponentsModule} from "./ui/components/components.module";
import { EmployeeComponent } from './ui/pages/employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ComponentsComponent } from './ui/components/components/components.component';

@NgModule({ // Decorador: Mete las funcionalidades a la clase  AppModule
  declarations: [// Declaro los componentes que voy a utilizar
    AppComponent,
    EmployeeComponent // Declaro employee, no explicó por qué

  ],
  imports: [ // Importamos funcionalidades de los modulos
    BrowserModule,
    ComponentsModule,
    BrowserAnimationsModule
    // AppRoutingModule,
    // ComponentsComponent
  ],
  exports:[], // Lo que voy a importar desde otros modulos
  providers: [], // Funcionan para importar los servicios, que tendran un @inyectable
  // Porqué es mejor un servicio que un componente para guardar información: Los componentes son vólatles
  // Un servicio se mantiene y tiene vida siempre
  bootstrap: [AppComponent]
})
export class AppModule { } // Lo que se conoce como root module, es el que va a contener la aplicacion
