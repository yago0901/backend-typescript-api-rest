import express from 'express';

const server = express();

server.get('/', (_:any, res:any) => {
  return res.send("Olá mundo")
})

export {server};