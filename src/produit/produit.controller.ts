import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ProduitService } from './produit.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';

@Controller('produits')
export class ProduitController {
  constructor(private readonly produitService: ProduitService) {}

  @Post()
  create(@Body() createProduitDto: CreateProduitDto) {
    return this.produitService.create(createProduitDto);
  }

  @Get()
  findAll() {
    return this.produitService.findAll();
  }

  @Get(':sn')
  findOne(@Param('sn') sn: string) {
    return this.produitService.findOne(sn);
  }

  @Put(':sn')
  update(@Param('sn') sn: string, @Body() updateProduitDto: UpdateProduitDto) {
    return this.produitService.update(sn, updateProduitDto);
  }

  @Delete(':sn')
  remove(@Param('sn') sn: string) {
    return this.produitService.remove(sn);
  }
}
