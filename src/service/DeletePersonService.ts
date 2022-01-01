import { getRepository } from "typeorm";
import { Person } from "../entities/Person";


export class DeletePersonService {
  async delete(id: string) {

    const personRepo = getRepository(Person);

    if (!(await personRepo.findOne(id))) {
      return new Error ("Pessoa não existe!");
    }

    await personRepo.delete(id);
  }
}