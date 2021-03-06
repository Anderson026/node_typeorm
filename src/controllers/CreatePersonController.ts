import { Request, Response } from "express";

import  CreatePersonService  from "../service/CreatePersonService";

export class CreatePersonControler {
  async handle(request: Request, response: Response) {

    const {nome, telefone, email} = request.body;

    try {
      await CreatePersonService.register({nome, telefone, email});
      response.status(201).json({nome, telefone, email});
    } catch (err) {
      response.status(400).json({message: "Deu algo errado"});
      throw err
    }
  
  }
}