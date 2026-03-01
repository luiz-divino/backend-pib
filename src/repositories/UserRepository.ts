import { EntityManager } from "typeorm";
import { User } from "../entities/User";

interface ICreateUserDTO {
  nome: string;
  email: string;
  password: string;
}

export class UserRepository {
    private manager : EntityManager
    constructor(
        manager : EntityManager
    ){
        this.manager = manager
    }

    createUser = async (userData: ICreateUserDTO): Promise<User | null> => {
        const userEntity = this.manager.create(User, userData);
        return await this.manager.save(userEntity)
    }
}