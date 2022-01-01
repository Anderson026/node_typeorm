import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./Person";


@Entity()
export class Adress {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({nullable: true})
  personId: number;

  @OneToOne(() => Person, {
    onDelete: "CASCADE"
  })
  @JoinColumn()
  person: Person;
}