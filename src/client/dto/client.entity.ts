import { Produit } from 'src/produit/dto/produit.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'client' })
export class Client {
  @PrimaryGeneratedColumn()
  id_client: number;

  @Column()
  type: string;

  @Column()
  fullname: string;

  @Column()
  identifiant: string;

  @Column()
  email: string;

  @Column()
  tel: string;

  @Column('longtext', { nullable: true })
  note: string;

  @Column({ type: 'timestamp' })
  date_ajout: Date;

  @OneToMany(() => Produit, (produit) => produit.client)
  produits: Produit[];
}
