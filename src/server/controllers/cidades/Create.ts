import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';
import { ICidade } from '../../database/models';
import { CidadesProvider } from '../../providers/cidades';

interface IBodyProps extends Omit<ICidade, 'id'> {}

export const createValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3).max(150),
    }))
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    const result = await CidadesProvider.create(req.body);

    if(result instanceof Error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors:{
                default: result.message
            }
        });
        return;
    }

    res.status(StatusCodes.CREATED).json(result);
};
