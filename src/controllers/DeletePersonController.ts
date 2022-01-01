import { Request, Response } from "express";
import { DeletePersonService } from "../service/DeletePersonService";


export class DeletePersonController {

  async handle(request: Request, response: Response) {
    const {id} = request.params;

    const service = new DeletePersonService();

    const result = await service.delete(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}