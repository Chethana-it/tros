import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { EmployeeTier } from './employee/Employee.enum';

@Injectable()
export class EmployeeTierValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(!(value.tier in EmployeeTier)){
        throw new BadRequestException(`${value.tier} is nor valid tier`)
    }
    
    return value;
  }
}
