import { DataSource } from "typeorm";
import { appDB } from "../../index";
import { User } from "../models/User"
import { IDataSourceConfig } from "../database/interfaces/IDataSourceConfig";
import { injected } from "brandi";
import { TOKENS } from "../../container";

export class UserService {
   private dataSource : DataSource;
    constructor(config: IDataSourceConfig) {
        this.dataSource = config.getDataSource();
        this.dataSource.initialize();
    }
  
    createUserEntity(){ 
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
        this.dataSource.manager.save(user);
    }
        
}
injected(UserService, TOKENS.dataSourceConfig);