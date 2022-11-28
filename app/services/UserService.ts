import { DataSource } from "typeorm";
import { User } from "../models/User"
import { Wallet } from "../models/Wallet";
import { IDataSourceConfig } from "../database/interfaces/IDataSourceConfig";
import { injected } from "brandi";
import { TOKENS } from "../../container";

export class UserService {
   private dataSource : DataSource;
    constructor(config: IDataSourceConfig) {
        this.dataSource = config.getDataSource();
    }
  
    async createUserEntity(id: number, createdAt: Date, updatedAt: Date, firstname: string, lastName: string, cpfCnpj: string,
        isCnpj: boolean, email: string, password: string, wallet: Wallet | null){ 
        const user = new User(
          id,
          createdAt,
          updatedAt,
          firstname,
          lastName,
          cpfCnpj,
          isCnpj,
          email,
          password,
          wallet
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