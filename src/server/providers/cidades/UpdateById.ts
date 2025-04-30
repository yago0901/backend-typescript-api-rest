import { ETableNames } from '../../database/ETableNames';
import { Knex } from '../../database/knex';
import { ICidade } from "../../database/models";

export const updateById = async (id: number, cidade: Omit<ICidade, 'id'>): Promise<void | Error> => {
    try {

       const result = await Knex(ETableNames.cidade).where('id', id).update(cidade);

       if (result === 0) {
        return new Error('Cidade não encontrada para atualizar.');
      }
      
    } catch (error){
        console.log(error);
        return new Error('Erro ao atualizar o registro da cidade');
    }
};
