import { Request, Response } from "express";
import * as yup from "yup";
import { validation } from '../../shared/middlewares';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string
}

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().optional().moreThan(0),
        limit: yup.number().optional().moreThan(0),
        filter: yup.string().optional()
    }))
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    
    console.log(req.query);

    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado');
    return;
};
