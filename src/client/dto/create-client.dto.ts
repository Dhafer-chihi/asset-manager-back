import { IsEmail } from 'class-validator';

export class CreateClientDto {
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
