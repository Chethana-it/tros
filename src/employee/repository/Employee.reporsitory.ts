import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Employee, EmployeeDocument } from "../schema/Employee.schema";
import { EmployeeCreateDto } from "../dto/EmployeeCreate.dto";


@Injectable()
export class EmployeeRepository{
   constructor(@InjectModel(Employee.name) private employeeModel:Model<EmployeeDocument>){}
   
     async create(createEmployeeDto:EmployeeCreateDto):Promise<Employee>{
        let newEmployee = new this.employeeModel(createEmployeeDto)
        return await newEmployee.save()
     }  

     async findAll(): Promise<Employee[]>{
        return await this.employeeModel.find()
     }
}