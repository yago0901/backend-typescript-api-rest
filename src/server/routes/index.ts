import { Router, Request, Response } from 'express';
import {StatusCodes} from 'http-status-codes';

const router = Router();

router.get("/", (_: Request, res: Response) => {
    res.send("Olá mundo");
});

router.post("/teste", (req: Request, res: Response) => {
    console.log(req.body);

    res.status(StatusCodes.ACCEPTED).json(req.body);
});

export { router };
