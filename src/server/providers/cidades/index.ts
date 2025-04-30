import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as UpdateById from './UpdateById';
import * as DeleteById from './DeleteById';

export const CidadesProvider = {
...create,
 ...getAll,
 ...getById,
 ...UpdateById,
 ...DeleteById,
};