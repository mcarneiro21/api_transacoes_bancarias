import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

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

    @Column({
        type: 'enum',
        enum: TransactionTypeEnum,
        default: null
    })
    transactionStatus: TransactionTypeEnum | null

    @Column("boolean")
    authorized: boolean

    constructor(id: number, createdAt: Date, updatedAt: Date, transactionValue: number | null, 
        shippingWalletId: number | null, receiptWalletId: number | null, transactionStatus: TransactionTypeEnum | null, authorized: boolean){
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;  
        this.transactionValue = transactionValue;
        this.shippingWalletId = shippingWalletId; 
        this.receiptWalletId = receiptWalletId;
        this.transactionStatus = transactionStatus;
        this.authorized = authorized;
    }
}