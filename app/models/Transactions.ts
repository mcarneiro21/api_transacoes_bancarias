import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { TransactionTypeEnum } from './enums/TransactionTypeEnum';
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

    @Column("int")
    shippingWalletId: number | null;

    @Column("int")
    receiptWalletId: number | null;

    @Column({type: 'enum', enum: TransactionTypeEnum})
    transactionTypeEnum: TransactionTypeEnum;

    @Column("boolean")
    authorized: boolean

    constructor(id: number, createdAt: Date, updatedAt: Date, transactionValue: number | null, 
        shippingWalletId: number | null, receiptWalletId: number | null, transactionTypeEnum: TransactionTypeEnum , authorized: boolean){
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;  
        this.transactionValue = transactionValue;
        this.shippingWalletId = shippingWalletId; 
        this.receiptWalletId = receiptWalletId;
        this.transactionTypeEnum = transactionTypeEnum;
        this.authorized = authorized;
    }
}