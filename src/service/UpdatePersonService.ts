import { getRepository } from "typeorm";
import { Adress } from "../entities/Adress";
import { Contact } from "../entities/Contact";
import { Person } from "../entities/Person";

interface IUpdatePersonRequest {
  id: string;
  nome: string;
  telefone: string;
  email: string;
}

class UpdatePersonService {

  async update({id, nome, telefone, email}: IUpdatePersonRequest) {
    const personRepo = getRepository(Person);

    const person = await personRepo.findOne(id);

    if(!person) {
      return new Error ("Pessoa inexistente!");
    }

    person.nome = nome ? nome : person.nome;

    await personRepo.save(person);
    // alterando os dados de contato
    const contactRepo = getRepository(Contact);

    const contactUpdate = await contactRepo.findOne(id);

    contactUpdate.telefone = telefone ? telefone : contactUpdate.telefone;

    await contactRepo.save(contactUpdate);

    // alterando os dados de endereço
    const adressRepo = getRepository(Adress);

    const adressUpdate = await adressRepo.findOne(id);

    adressUpdate.email = email ? email : adressUpdate.email;

    await adressRepo.save(adressUpdate);
    
  }
}

export default new UpdatePersonService();