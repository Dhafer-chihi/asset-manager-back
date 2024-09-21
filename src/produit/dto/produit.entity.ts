import { Client } from 'src/client/dto/client.entity';
import {
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'produit' })
export class Produit {
  @PrimaryColumn()
  sn: string;

  @Column({ nullable: false, default: 0 })
  ticket: number;

  @Column()
  cat: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  pwd: string;

  @Column({ type: 'timestamp' })
  date_ajout: Date;

  @Column({ nullable: true })
  agent_saisie: string;

  @Column({ type: 'timestamp' })
  date_modif: Date;

  @BeforeUpdate()
  update_date_modif() {
    this.date_modif = new Date();
  }

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

  @Column({ name: 'client_id', nullable: false })
  clientId: number;

  @ManyToOne(() => Client, (client) => client.produits)
  @JoinColumn({ name: 'client_id' })
  client: Client;
}
