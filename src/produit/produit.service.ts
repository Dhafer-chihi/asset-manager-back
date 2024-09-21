import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Produit } from './dto/produit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProduitService {
  constructor(
    @InjectRepository(Produit)
    private readonly produitRepositery: Repository<Produit>,
  ) {}
  async create(createProduitDto: CreateProduitDto) {
    return await this.produitRepositery.save(createProduitDto);
  }

  async findAll() {
    return await this.produitRepositery.find({
      relations: {
        client: true,
      },
    });
  }

  async findOne(sn: string) {
    const produit = await this.produitRepositery.findOneBy({ sn });
    if (!produit) {
      throw new NotFoundException('Produit not found');
    }
    return produit;
  }

  async update(sn: string, updateProduitDto: UpdateProduitDto) {
    const produit = await this.produitRepositery.findOneBy({ sn });
    if (!produit) {
      throw new NotFoundException('Produit not found');
    }
    return await this.produitRepositery.update(sn, updateProduitDto);
  }

  async remove(sn: string) {
    const produit = await this.produitRepositery.findOneBy({ sn });
    if (!produit) {
      throw new NotFoundException('Produit not found');
    }
    return await this.produitRepositery.remove(produit);
  }
}
