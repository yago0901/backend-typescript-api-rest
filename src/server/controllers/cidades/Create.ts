import { Request, Response } from "express";
import * as yup from "yup";

interface ICidade {
    nome: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    let validateData: ICidade | undefined = undefined;

    try {
        validateData = await bodyValidation.validate(req.body);
    } catch (error) {
        const yupError = error as yup.ValidationError;

        res.json({
            errors: {
                default: yupError.message,
            },
        });
    }

    console.log(validateData);
};
