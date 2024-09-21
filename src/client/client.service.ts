import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './dto/client.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}
  async create(createClientDto: CreateClientDto) {
    return await this.clientRepository.save(createClientDto);
  }

  async findAll() {
    return await this.clientRepository.find({
      relations: {
        produits: true,
      },
    });
  }

  async findOne(id_client: number) {
    const client = await this.clientRepository.findOneBy({ id_client });
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return client;
  }

  async update(id_client: number, updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.findOneBy({ id_client });
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return await this.clientRepository.update(id_client, updateClientDto);
  }

  async remove(id_client: number) {
    const client = await this.clientRepository.findOneBy({ id_client });
    if (!client) {
      throw new NotFoundException('Client not found');
    }
    return await this.clientRepository.remove(client);
  }
}
