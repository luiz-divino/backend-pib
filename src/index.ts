import express from "express";
import 'reflect-metadata';
import { appDataSource } from "./database/data-source";
import routes from "./routes";

appDataSource.initialize().then(()=>{
    const server = express()
    server.use(express.json())
    server.use(routes)
    return server.listen(process.env.PORT, ()=>{
        console.log(`Server running`)
    })
})