import { Produit } from 'src/produit/dto/produit.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'client' })
export class Client {
  @Column({ default: true })
  //@Generated('increment')
  compt: number;

  @PrimaryGeneratedColumn()
  id_client: number;

  @Column()
  type: string;

  @Column()
  entreprise: string;

  @Column()
  mat: string;

  @Column()
  fullname: string;

  @Column()
  cin: number;

  @Column()
  email: string;

  @Column()
  tel: string;

  @Column('longtext', { nullable: true })
  note: string;

  @CreateDateColumn({ nullable: true })
  date_ajout: Date;

  @OneToMany(() => Produit, (produit) => produit.sn)
  produit: Produit[];
}
