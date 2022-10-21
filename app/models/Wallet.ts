import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Collection, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { WalletTypeEnum } from "./enums/WalletTypeEnum";
import { Transactions } from "./Transactions";
import { User } from "./User";

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

    @OneToOne(() => User, (user) => user.wallet)
    @JoinColumn()
    user: User;

    @OneToMany(() => Transactions, (toTransactions) => toTransactions.toWallet)
    toTransactions: Collection<Transactions> | null;

    @OneToMany(() => Transactions, (fromTransactions) => fromTransactions.fromWallet)
    fromTransactions: Collection<Transactions> | null;

    @Column({type: 'enum',enum: WalletTypeEnum})
    walletTypeEnum: WalletTypeEnum;

    constructor(id: number, createdAt: Date, updatedAt: Date, saldo: number | null, user: User, 
        toTransactions: Collection<Transactions> | null, fromTransactions: Collection<Transactions> | null, 
        walletTypeEnum: WalletTypeEnum ){
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt; 
        this.saldo = saldo; 
        this.user = user;
        this.toTransactions = toTransactions;
        this.fromTransactions = fromTransactions;
        this.walletTypeEnum = walletTypeEnum;
    }
}