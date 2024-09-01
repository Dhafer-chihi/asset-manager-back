import { PartialType } from '@nestjs/mapped-types';
import { CreateProduitDto } from './create-produit.dto';

export class UpdateProduitDto extends PartialType(CreateProduitDto) {
  sn: string;
  cat: string;
  name: string;
  pwd: string;
  niveau: string;
  accessoire: string;
  panne: string;
  diag: string;
  note: string;
}
