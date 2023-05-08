import { Module } from '@nestjs/common';
import { VehicleController } from '../controllers/vehicle.controller';
import { VehicleServie } from '../services/vehicle.service';
import { VehicleRepository } from '../repository/vehicle.repository';

import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from '../schema/Vehicle.schema';


@Module({
  imports: [MongooseModule.forFeature([{name:Vehicle.name, schema:  VehicleSchema}])],
  controllers: [VehicleController],
  providers: [VehicleServie, VehicleRepository]
})
export class VehicleModule {}