import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { EmployeeStatus, EmployeeTier } from "../Employee.enum";
import { trusted } from "mongoose";

// export const EmployeeSchema=({    
//     id: String,
//     firstName: String,
//     lastname: String,
//     designation: String,
//     nearestCity: String,
//     tier: EmployeeTier
//     status: EmployeeStatus
// })

// export class Employee{
    
//     id: string
//     firstName: string
//     lastname: string
//     designation: string
//     nearestCity: string
//     tier: EmployeeTier
//     status: EmployeeStatus

// } 






export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee{
    @Prop()
    id: string
    
    @Prop({required:true})
    firstName: string

    @Prop({required:true})
    lastname: string

    @Prop()
    designation: string

    @Prop()
    nearestCity: string

    @Prop({ type: Number, enum: EmployeeTier })
    tier: EmployeeTier

    @Prop()
    status: EmployeeStatus
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee)
export { EmployeeStatus };

