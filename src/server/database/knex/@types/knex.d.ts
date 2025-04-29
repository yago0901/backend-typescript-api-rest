import { ICidade } from '../../models';

declare module 'knex/types/tables' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface Tables {
       cidade: ICidade
       //pessoa: IPessoa 
       //usuario: IUsuario 
    }
}