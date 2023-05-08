import { IsEmpty, IsNotEmpty, NotEquals } from "class-validator"
import { EmployeeStatus, EmployeeTier } from "../Employee.enum"
import { notEqual } from "assert";

export class EmployeeCreateDto{
    id: string;
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastname: string
    @NotEquals('CEO')
    designation: string
    nearestCity: string
    tier: EmployeeTier
    status: EmployeeStatus
}