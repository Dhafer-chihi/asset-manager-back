import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsEmail } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {
  type: string;
  entreprise: string;
  fullname: string;
  mat: string;
  cin: number;
  @IsEmail()
  email: string;
  tel: string;
  date: Date;
}
