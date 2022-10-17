import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Collection } from "typeorm";
import { Transactions } from "./Transactions";

@Entity()
export class Wallet implements IModel {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

    @Column("int")
    saldo: number | null;

    @Column("int")
    userId: number | null;

    @Column("int")
    transactions: Collection<Transactions> | null;

    @Column("enum")
    walletTypeEnum: WalletTypeEnum;

    constructor(id: number, createdAt: Date, updatedAt: Date, saldo: number | null, userId: number | null, 
        transactions: Collection<Transactions> | null, walletTypeEnum: WalletTypeEnum ){
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt; 
        this.saldo = saldo; 
        this.userId = userId;
        this.transactions = transactions;
        this.walletTypeEnum = walletTypeEnum;
    }
}