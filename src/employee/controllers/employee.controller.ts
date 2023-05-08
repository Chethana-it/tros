import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeeTier } from '../Employee.enum';
import { EmployeeService } from '../services/employee.service';
import { EmployeeSearchDto } from '../dto/EmployeeSearch.dto';
import { EmployeeUpdateDto } from '../dto/EmployeeUpdate.dto';
import { EmployeeCreateDto } from '../dto/EmployeeCreate.dto';
import { EmployeeTierValidationPipe } from 'src/employee-tier-validation.pipe';
import { Employee } from '../schema/Employee.schema';

@Controller('employees')
export class EmployeeController { 

    constructor(private employeeService: EmployeeService){
    }

    @Get()
    @UsePipes(ValidationPipe)
    async getAllEmployees(@Query() Param:EmployeeSearchDto ): Promise<Employee[]>{
        // if(Object.keys(Param).length){   
        //  return this.employeeService.employeeSearch(Param)
        // }else{         
        //     return this.employeeService.getAllEmployees();
        // } 
        return await this.employeeService.getAllEmployees()    
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(EmployeeTierValidationPipe)
    createEmployee(@Body() employeeCreateDto:EmployeeCreateDto){
                 return this.employeeService.createEmployee(employeeCreateDto);
    }

    // @Get('/:id')
    // getEmployeeById(@Param('id') id:string){
    //    return this.employeeService.getEmployeeById(id)
    // }

    // @Put('/:id/city')
    // updateEmployee(@Param('id') id:string ,@Body() employeeUpdateDto:EmployeeUpdateDto){
    //     console.log(employeeUpdateDto);        
    //     employeeUpdateDto.id = id
    //     return this.employeeService.updateEmployee(employeeUpdateDto)
    // }

    // @Delete('/:id')
    // deleteEmployee(@Param('id') id:string){
    //     if(!this.employeeService.deleteEmployee(id)){
    //         throw new NotFoundException("Employee does not exists")
    //     }
    // }

}
