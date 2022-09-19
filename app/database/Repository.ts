import pg from 'pg'
class Repository implements IRepository{
    async create (model: IModel){
        const client = new pg.Client("");
        await client.connect();
        await client.query('INSERT INTO $1::text values($2::text)',[tableName, args]);
        await client.end();
        return model;
    }
    find (id: number){
        return null;
    }
    delete (id: number) {
        return false;
    }
    update (model: IModel, id: number){
        return model;
    } 
}