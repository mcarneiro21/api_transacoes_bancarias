import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne } from "typeorm";
import { TransactionTypeEnum } from './enums/TransactionTypeEnum';
import { Wallet } from "./Wallet";
@Entity()
export class Transactions implements IModel {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

    @Column("int")
    transactionValue: number | null;

    @ManyToOne(() => Wallet, (fromWallet) => fromWallet.fromTransactions)
    fromWallet: Wallet | null;

    @ManyToOne(() => Wallet, (toWallet) => toWallet.toTransactions)
    toWallet: Wallet | null;

    @Column({type: 'enum', enum: TransactionTypeEnum})
    transactionTypeEnum: TransactionTypeEnum;

    @Column("boolean")
    authorized: boolean

    constructor(id: number, createdAt: Date, updatedAt: Date, transactionValue: number | null, 
        fromWallet: Wallet | null, toWallet: Wallet | null, transactionTypeEnum: TransactionTypeEnum , authorized: boolean){
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;  
        this.transactionValue = transactionValue;
        this.fromWallet = fromWallet; 
        this.toWallet = toWallet;
        this.transactionTypeEnum = transactionTypeEnum;
        this.authorized = authorized;
    }
}