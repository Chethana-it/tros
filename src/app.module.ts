import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/modules/employee.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_URL } from './app.properties';
import { VehicleModule } from './employee/modules/vehicle.module';
 
@Module({
  imports: [EmployeeModule, VehicleModule, MongooseModule.forRoot(MONGO_URL)],
  controllers: [],
  providers: [],
})
export class AppModule {}
