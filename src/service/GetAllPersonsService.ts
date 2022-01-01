import { getRepository } from "typeorm";
import { Person } from "../entities/Person";

export class GetAllPersonsService {

  async getAllPersons() {
    
    const personRepo = getRepository(Person);

    const persons = await personRepo.find({
      relations: ["contact", "adress"]
    });

    return persons;
  }
}