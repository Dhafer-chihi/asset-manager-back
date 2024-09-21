import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  profil: string;

  @Column()
  fullname: string;

  @Column()
  login: string;

  @Column()
  pwd: string;

  @Column({ type: 'timestamp' })
  date_ajout: Date;
}
