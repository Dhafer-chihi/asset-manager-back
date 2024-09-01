import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @Get(':id_client')
  findOne(@Param('id_client') id_client: number) {
    return this.clientService.findOne(id_client);
  }

  @Put(':id_client')
  update(
    @Param('id_client') id_client: number,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientService.update(id_client, updateClientDto);
  }

  @Delete(':id_client')
  remove(@Param('id_client') id_client: number) {
    return this.clientService.remove(id_client);
  }
}
