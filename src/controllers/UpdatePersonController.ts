import { Request, Response } from "express";
import UpdatePersonService from "../service/UpdatePersonService";


export class UpdatePersonController {
  async handle(request: Request, response: Response) {
    const {id} = request.params;

    const {nome, telefone, email} = request.body;
    try {
      await UpdatePersonService.update({id, nome, telefone, email})
      response.status(200).json({id, nome, telefone, email});
    } catch (err) {
      response.status(400).json({message: "Algo deu errado!"});
      throw err;
    }
  }
}