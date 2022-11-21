import { DataSource } from "typeorm";
import { User } from "../models/User"
import { IDataSourceConfig } from "../database/interfaces/IDataSourceConfig";
import { injected } from "brandi";
import { TOKENS } from "../../container";

export class UserService {
   private dataSource : DataSource;
    constructor(config: IDataSourceConfig) {
        this.dataSource = config.getDataSource();
    }
  
    async createUserEntity(){ 
        const user = new User(
          0,
          new Date,
          new Date,
          'Mateus',
          'Junior',
          '12345678910111',
          true,
          'mateus@teste.com',
          'teste',
          null
        );
        try {
            await this.dataSource.manager.save(user);   
        } catch (error) {
            console.log(error);
        }
    }
    
    async readUserEntity(){
        try {
            return await this.dataSource.manager.findOneBy(User, {
                id: 1
            })   
        } catch (error) {
            console.log(error);
        }
    }

    async updateUserEntity(){
        try {
            await this.dataSource.manager.update(User, 1, {
            firstName: 'update'
            });
        } catch (error) {
            console.log(error);
        }
    }

    async deleteUserEntity(){
        try {
            await this.dataSource.manager.delete(User, 1);
        } catch (error) {
            console.log(error);
        }
    }
}
injected(UserService, TOKENS.dataSourceConfig);