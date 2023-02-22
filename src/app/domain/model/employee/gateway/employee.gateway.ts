

// clase abstracta para crear el gateway vamos a tener tod0 lo que vamos a resolver del observable que vamos a obtener a través de la interface
import {Observable} from "rxjs";
import {IUserModel} from "../../employee.models";
import {IUserRequest} from "../../../../infrastructure/driver-adpter/employee/employee.models";

export abstract class EmployeeGateway {
  // IUseModel esta es la respuesta
  // IUserRequest este es el request
  abstract create(params:IUserRequest): Observable<IUserModel>
  // abstract updateUser (params:IUserRequest): Observable<IUserModel>
  // abstract deleteUser (params:IUserRequest): Observable<IUserModel>

}
