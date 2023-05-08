import { Employee } from "../schema/Employee.schema"

export class VehicleCreateDto{
    
     id:string
     
     make:string
     
     model:string
     
     vin:string
     
     employee:Employee
}