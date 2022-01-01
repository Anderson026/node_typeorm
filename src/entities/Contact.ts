import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Person } from "./Person";

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    telefone: string;

    @Column({nullable: true})
    personId: number;

    @OneToOne(() => Person, {
        onDelete: "CASCADE"
    })
    @JoinColumn()
    person: Person;
}