import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Adress } from "./Adress";
import { Contact } from "./Contact";


@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @OneToOne(() => Contact, contact => contact.person)
    contact: Contact;

    @OneToOne(() => Adress, adress => adress.person)
    adress: Adress;
}