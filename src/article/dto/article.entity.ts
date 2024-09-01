import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'article' })
export class Article {
  @Column()
  compt: number;

  @PrimaryColumn()
  ref: string;

  @Column()
  cat: string;

  @Column()
  name: string;

  @Column('double')
  prix: number;

  @Column()
  qte: number;

  @CreateDateColumn()
  date_ajout: Date;
}
