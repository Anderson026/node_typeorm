import { Request, Response } from "express";
import { GetAllPersonsService } from "../service/GetAllPersonsService";

export class GetAllPersonsController {

  async handle(request: Request, response: Response) {

    const service = new GetAllPersonsService();

    const persons = await service.getAllPersons();

    return response.status(200).json(persons);
  }
}