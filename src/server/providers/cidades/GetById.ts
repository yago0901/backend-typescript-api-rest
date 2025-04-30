import { ETableNames } from '../../database/ETableNames';
import { Knex } from '../../database/knex';
import { ICidade } from "../../database/models";

export const getById = async (id:number): Promise<ICidade | Error> => {
    try {
       const result = await Knex(ETableNames.cidade).where('id', id).first();

       if (result) return result;

       return new Error('Cidade não encontrada');
    } catch (error){
        console.log(error);
        return new Error('Erro ao buscar o registro da cidade');
    }
};
