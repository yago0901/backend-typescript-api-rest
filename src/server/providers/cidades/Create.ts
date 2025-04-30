import { ETableNames } from '../../database/ETableNames';
import { Knex } from '../../database/knex';
import { ICidade } from "../../database/models";

export const create = async (
    cidade: Omit<ICidade, "id">
): Promise<number | Error> => {
    try {

       const [result] = await Knex(ETableNames.cidade).insert(cidade).returning('id');

       if (typeof result === 'object') {
        return result.id;
      }
      
      if (typeof result === 'number') {
        return result;
      }
      
      return new Error('Erro ao inserir o registro da cidade');
    } catch (error){
        console.log(error);
        return new Error('Erro ao cadastrar o registro da cidade');
    }
};
