import { Module } from '@nestjs/common';
import { EtatService } from './etat.service';
import { EtatController } from './etat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etat } from './dto/etat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Etat])],
  controllers: [EtatController],
  providers: [EtatService],
})
export class EtatModule {}
