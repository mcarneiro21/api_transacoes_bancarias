interface IRepository {
    create: (model:IModel) => IModel | null;
    find: (id:number) => IModel | null;
    delete: (id:number) => boolean;
    update: (model:IModel, id:number) => IModel | null;
};