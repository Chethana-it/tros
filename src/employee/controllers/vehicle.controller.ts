import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { VehicleCreateDto } from "../dto/VehicleCreate.dto";
import { Vehicle } from '../schema/Vehicle.schema';
import { VehicleServie } from '../services/vehicle.service';
import { log } from 'console';

@Controller("vehicles")
export class VehicleController{ 
    constructor(private vehicleService:VehicleServie){}

    @Post()
    create(@Body() vehicleCreateDto:VehicleCreateDto):Promise<Vehicle>{
       return this.vehicleService.create(vehicleCreateDto)
    }

    @Get()
    async getAll(){
        return this.vehicleService.getAll()
    }
}