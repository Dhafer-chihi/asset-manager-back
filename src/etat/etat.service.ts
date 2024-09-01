import { Injectable } from '@nestjs/common';
import { CreateEtatDto } from './dto/create-etat.dto';
import { UpdateEtatDto } from './dto/update-etat.dto';

@Injectable()
export class EtatService {
  create(createEtatDto: CreateEtatDto) {
    return 'This action adds a new etat';
  }

  findAll() {
    return `This action returns all etat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} etat`;
  }

  update(id: number, updateEtatDto: UpdateEtatDto) {
    return `This action updates a #${id} etat`;
  }

  remove(id: number) {
    return `This action removes a #${id} etat`;
  }
}
