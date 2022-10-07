import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Transactions implements IModel {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;

    constructor(id: number, createdAt: Date, updatedAt: Date){
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;  
    }
}