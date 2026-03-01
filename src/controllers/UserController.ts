import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  userService: UserService;
  constructor(userService = new UserService()) {
    this.userService = userService;
  }
  createUser = async (
    request: Request,
    response: Response,
  ): Promise<Response<any, Record<string, any>>> => {
    const { nome, email, password } = request.body;
    if (!nome || !email || !password) {
      return response.status(404).json({
        message: "BAD REQUEST",
      });
    }
    const user = await this.userService.createUser(nome, email, password);
    return response.status(201).json({
      message: "User created successfully",
      user,
    });
  };
}
