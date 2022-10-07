import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User implements IModel {
    @PrimaryGeneratedColumn()
    id: number;
    
    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
    
    @Column("varchar")
    firstName: string;

    @Column("varchar")
    lastName: string;

    @Column("varchar", { length: 14 })
    cpfCnpj: string;

    @Column("boolean")
    isCnpj: boolean;

    @Column("varchar", { length: 200})
    email: string;

    @Column("varchar", {length: 200})
    password: string;

    @Column("int")
    walletId: number | null;

    constructor(id: number, createdAt: Date, updatedAt: Date, firstname: string, lastName: string, cpfCnpj: string,
        isCnpj: boolean, email: string, password: string, walletId: number | null){
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.firstName = firstname;
        this.lastName = lastName;
        this.cpfCnpj = cpfCnpj;
        this.isCnpj = isCnpj;
        this.email = email;
        this.password = password;
        this.walletId = walletId;    
    }
}