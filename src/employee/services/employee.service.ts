import { Injectable, NotFoundException } from '@nestjs/common';

import { Employee } from '../schema/Employee.schema';
import { EmployeeStatus} from '../schema/Employee.schema';
import { EmployeeTier } from '../Employee.enum';

import { v4 as uuid } from 'uuid';
import { V4MAPPED } from 'dns';
import { EmployeeSearchDto } from '../dto/EmployeeSearch.dto';
import { EmployeeUpdateDto } from '../dto/EmployeeUpdate.dto';
import { log } from 'console';
import { EmployeeCreateDto } from '../dto/EmployeeCreate.dto';
import { EmployeeRepository } from '../repository/Employee.reporsitory';
@Injectable()
export class EmployeeService {

   constructor(private employeRepository: EmployeeRepository){}

   async getAllEmployees(){
      return await this.employeRepository.findAll()
   }

  async createEmployee(employeeCreateDto:EmployeeCreateDto): Promise<Employee>{
      return await this.employeRepository.create(employeeCreateDto)
  }

//   employeeSearch(employeeSearchDto:EmployeeSearchDto){
//    const {status,name} = employeeSearchDto
//    let employees=this.getAllEmployees();

   
//    if(status){
//       employees=employees.filter(employee => employee.status === status)  
//    }
//    if(name){
//       employees=employees.filter(employee => employee.firstName.includes(name) || employee.lastname.includes(name))
      
//    }
//    return employees
//   }

//   getEmployeeById(id:string): Employee {
//     const employees = this.getAllEmployees()
//     let employee = employees.find(employee=>employee.id===id)
//     if(!employee){
//       throw new NotFoundException(`${id} does not exist` )
//     }
//      return employee
//   }

//   updateEmployee(employeeUpdateDto: EmployeeUpdateDto):Employee{
//         const {id, city} = employeeUpdateDto
//         let employees = this.getEmployeeById(id)
//         console.log(employees); 
//         employees.nearestCity = city
//         return employees
//   }

//   deleteEmployee(id:string):boolean{
//    let employees = this.getAllEmployees();
//    this.employees = employees.filter(employee=>employee.id!=id)
//    return (employees.length!=this.employees.length)
//   }
}
