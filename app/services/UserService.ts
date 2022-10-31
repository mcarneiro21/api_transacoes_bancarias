import { DataSource } from "typeorm";
import { appDB } from "../../index";
import { User } from "../models/User"

export class UserService {
   private dataSource : DataSource;
    constructor() {
        this.dataSource = new DataSource();
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