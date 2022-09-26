import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User implements IModel {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column("datetime")
    createdAt: Date;
    
    @Column("datetime")
    updatedAt: Date;
    
    @Column("text")
    name: string;

    constructor(id: number, createdAt: Date, updatedAt: Date, name: string){
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.name = name;
    }
}