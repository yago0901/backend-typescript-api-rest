import express from "express";

const server = express();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
server.get("/", (_: any, res: any) => {
    return res.send("Olá mundo");
});

export { server };
