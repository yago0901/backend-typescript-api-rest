import { ETableNames } from "../../database/ETableNames";
import { Knex } from "../../database/knex";

export const deleteById = async (id: number): Promise<void | Error> => {
    try {
        const result = await Knex(ETableNames.cidade).where("id", id).del();

        if (result === 0) {
            return new Error("Registro não encontrado para deletar.");
        }
    } catch (error) {
        console.log(error);
        return new Error("Erro ao deletar o registro da cidade");
    }
};
