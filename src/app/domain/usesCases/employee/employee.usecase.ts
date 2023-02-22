import {Injectable} from "@angular/core";
import {EmployeeGateway} from "../../model/employee/gateway/employee.gateway";
import {catchError, Observable, of} from "rxjs";
import {IUserModel} from "../../model/employee.models";
import {IUserRequest} from "../../../infrastructure/driver-adpter/employee/employee.models";


@Injectable() //Para poder utilizarlo en otros lugares
export class EmployeeUsecase {
  constructor(private userGateway: EmployeeGateway){}
  create ( params: IUserRequest): Observable<IUserModel | null>{
    return this.userGateway.create(params).pipe(
      catchError(()=>{
        return of(null)// Tod0 lo que ponga acá lo va a convertir a un objeto observable
      })
    )
  }
}
