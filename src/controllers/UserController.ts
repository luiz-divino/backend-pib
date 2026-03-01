import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import bcrypt from "bcrypt";

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
        message: "name, email and password are required",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await this.userService.createUser(nome, email, hashPassword);
    return response.status(201).json({
      message: "User created successfully",
      user,
    });
  };
}
