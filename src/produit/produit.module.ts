import { Module } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { ProduitController } from './produit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produit } from './dto/produit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produit])],
  controllers: [ProduitController],
  providers: [ProduitService],
})
export class ProduitModule {}
