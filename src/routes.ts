import { Router } from "express";
import { UserController } from "./controllers/UserController";
const { createUser } = new UserController();
const routes = Router();

routes.post("/user", createUser);

export default routes;
