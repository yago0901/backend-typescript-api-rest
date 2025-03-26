import { Router, Request, Response } from 'express';
import {CidadesController} from '../controllers'

const router = Router();

router.get("/", (_: Request, res: Response) => {
    res.send("Olá mundo");
});

router.post('/cidades', CidadesController.create);


export { router };
