import { getRepository } from "typeorm";
import { Adress } from "../entities/Adress";
import { Contact } from "../entities/Contact";
import { Person } from "../entities/Person";

interface IPersonServiceRequest {
  nome: string;
  telefone: string;
  email: string;
}

class CreatePersonService {
  async register({nome, telefone, email}: IPersonServiceRequest) {
    const personRepo = getRepository(Person);
    const person = new Person();
    person.nome = nome;

    personRepo.save(person);

    const contactRepo = getRepository(Contact);
    const contact = new Contact();
    contact.telefone = telefone;
    contact.person = person;

    contactRepo.save(contact);

    const adressRepo = getRepository(Adress);
    const adress = new Adress();
    adress.email = email;
    adress.person = person;

    adressRepo.save(adress);
  }
}

export default new CreatePersonService();