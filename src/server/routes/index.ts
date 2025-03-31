import { Router, Request, Response } from "express";
import { CidadesController } from "../controllers";

const router = Router();

router.get("/", (_: Request, res: Response) => {
    res.send("Olá mundo");
});

router.get("/cidades", CidadesController.getAllValidation, CidadesController.getAll);
router.post("/cidades", CidadesController.createValidation, CidadesController.create);
router.get("/cidades/:id", CidadesController.getByIdValidation, CidadesController.getById);
router.put("/cidades/:id", CidadesController.updateByIdValidation, CidadesController.updateById);
router.delete("/cidades/:id", CidadesController.deleteByIdValidation, CidadesController.deleteById);


export { router };
