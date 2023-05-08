import { Module } from '@nestjs/common';
import { EmployeeController } from '../controllers/employee.controller';
import { EmployeeService } from '../services/employee.service';
import { EmployeeRepository } from '../repository/Employee.reporsitory';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from '../schema/Employee.schema';

@Module({
  imports: [MongooseModule.forFeature([{name:Employee.name, schema:  EmployeeSchema}])],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository]
})
export class EmployeeModule {}
