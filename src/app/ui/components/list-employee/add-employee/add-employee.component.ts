import {Component, OnInit} from '@angular/core';
import {EmployeeUsecase} from "../../../../domain/usesCases/employee/employee.usecase";

@Component({
  selector: 'app-list-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  constructor(private userUseCase: EmployeeUsecase) { // Acá le digo cual es el caso de uso que voy a implementar
  }

  ngOnInit(): void {
    const data = {
      id: 2,
      dni: "1038546244",
      name: "Laura Daniela Gonzalez",
      dateContract: "2016-09-09",
      post: "Lider de servicio",
      linked: true,
      currenSalary: 5600000,
    }

    // Del caso de uso traigame la función create
    this.userUseCase.create(data).subscribe(result => { // Acá invoco mi caso de uso
      console.log(result);
    })
  }
}
