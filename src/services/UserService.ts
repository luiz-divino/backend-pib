import { appDataSource } from "../database/data-source";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
  userRepository: UserRepository;
  constructor(userRepository = new UserRepository(appDataSource.manager)) {
    this.userRepository = userRepository;
  }

  createUser = async (
    nome: string,
    email: string,
    password: string,
  ): Promise<User | null> => {
    return await this.userRepository.createUser({ nome, email, password });
  };
}
