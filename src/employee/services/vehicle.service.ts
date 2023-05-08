import { Injectable } from "@nestjs/common";
import { VehicleCreateDto } from "../dto/VehicleCreate.dto";
import { VehicleRepository } from "../repository/vehicle.repository";
import { Vehicle } from "../schema/Vehicle.schema";

@Injectable()
export class VehicleServie{
    constructor(private vehicleRepository:VehicleRepository){}

    async create(vehicleCreateDto:VehicleCreateDto):Promise<Vehicle>{        
        return await this.vehicleRepository.create(vehicleCreateDto)
    }

    async getAll():Promise<Vehicle[]>{
        return await this.vehicleRepository.findAll()
    }
}