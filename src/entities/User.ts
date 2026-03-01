import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({type: "varchar", length:255, nullable: false})
    nome!: string

    @Column({type: "varchar", length:255, nullable: false, unique: true})
    email!: string

    @Column({type: "varchar", length:255, nullable: false})
    password!: string
}
