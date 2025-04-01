import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup'

describe('Cidades - Create', () => {

    it('Cria registro', async () => {

        const res = await testServer
        .post('/cidades')
        .send({ nome: 'Caxias do Sul'});

        expect(res.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res.body).toEqual('number');
    });

    it('Cria registro com nome curto', async () => {

        const res = await testServer
        .post('/cidades')
        .send({ nome: 'Ca'});

        expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(res.body).toHaveProperty('errors.body.nome');
    });
});