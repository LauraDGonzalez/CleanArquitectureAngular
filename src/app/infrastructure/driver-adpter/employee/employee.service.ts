import {Injectable} from '@angular/core';
import {EmployeeGateway} from "../../../domain/model/employee/gateway/employee.gateway";
import {IUserRequest} from "./employee.models";
import {Observable} from "rxjs";
import {IUserModel} from "../../../domain/model/employee.models";

import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends EmployeeGateway {
  private httpHeaders = new HttpHeaders({"Content-type": "application/json"});
  API_USERS = 'http://localhost:8082/employee';

  constructor(public http: HttpClient) {
    super();
  }

  //(params: IUserRequest): esto es lo que recibe
  // IUserModel esto es lo que responde
  // post<IUserModel> Responde este modelo
  // Recibe una url de api_userrs, unos parametros y unos headers
  create(params: IUserRequest): Observable<IUserModel> {
    return this.http.post<IUserModel>(this.API_USERS, params, {
      headers: this.httpHeaders
    });
  }

  // deleteUser(params: IUserRequest): Observable<IUserModel> {
  //   return undefined;
  // }
  //
  // updateUser(params: IUserRequest): Observable<IUserModel> {
  //   return undefined;
  // }
}

