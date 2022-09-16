class User implements IModel {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        name: string;
    constructor(id: number, createdAt: Date, updatedAt: Date, name: string){
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.name = name;
    }
}