import { DataSource } from "typeorm";
import { Wallet } from "../models/Wallet"
import { IDataSourceConfig } from "../database/interfaces/IDataSourceConfig";
import { injected } from "brandi";
import { TOKENS } from "../../container";

export class WalletService {
   private dataSource : DataSource;
    constructor(config: IDataSourceConfig) {
        this.dataSource = config.getDataSource();
        this.dataSource.initialize();
    }
  
    // createUserEntity(){ 
    //     const wallet = new Wallet(
    //       0,
    //       new Date,
    //       new Date,
    //       100,
    //       'Junior',
    //       '12345678910111',
    //       true,
    //       'mateus@teste.com',
    //       'teste',
    //       null
    //     );
    //     this.dataSource.manager.save(wallet);
    // }
        
}
injected(WalletService, TOKENS.dataSourceConfig);