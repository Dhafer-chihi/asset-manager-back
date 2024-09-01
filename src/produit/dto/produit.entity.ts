import { Client } from 'src/client/dto/client.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'produit' })
export class Produit {
  @PrimaryColumn()
  sn: string;

  @Column()
  cat: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  pwd: string;

  @CreateDateColumn()
  date_ajout: Date;

  @Column({ nullable: true })
  agent_saisie: string;

  @CreateDateColumn()
  date_modif: Date;

  @Column({ nullable: true })
  agent_modif: string;

  @Column()
  niveau: string;

  @Column({ nullable: true })
  accessoire: string;

  @Column({ nullable: true })
  panne: string;

  @Column({ nullable: true })
  diag: string;

  @Column({ nullable: true })
  note: string;

  @ManyToOne(() => Client, (client) => client.id_client)
  client: Client;
}
