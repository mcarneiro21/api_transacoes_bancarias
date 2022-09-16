class Repository implements IRepository{
    create (model: IModel){
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