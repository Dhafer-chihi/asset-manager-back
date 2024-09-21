import { Column, Entity, PrimaryColumn } from 'typeorm';

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

  @Column('float')
  prix: number;

  @Column()
  qte: number;

  @Column({ type: 'timestamp' })
  date_ajout: Date;
}
