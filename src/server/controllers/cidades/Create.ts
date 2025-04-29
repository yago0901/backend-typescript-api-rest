import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { ICidade } from '../../database/models';

interface IBodyProps extends Omit<ICidade, 'id'> {}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3),
    }))
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    res.status(StatusCodes.CREATED).json(1);
    return;
};
