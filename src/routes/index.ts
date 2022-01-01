import { Router } from "express";
import { CreatePersonControler } from "../controllers/CreatePersonController";
import { DeletePersonController } from "../controllers/DeletePersonController";
import { GetAllPersonsController } from "../controllers/GetAllPersonsController";
import { UpdatePersonController } from "../controllers/UpdatePersonController";


const router = Router();

router.post("/persons", new CreatePersonControler().handle);
router.put("/persons/:id", new UpdatePersonController().handle);
router.get("/persons", new GetAllPersonsController().handle);
router.delete("/persons/:id", new DeletePersonController().handle);

export default router;