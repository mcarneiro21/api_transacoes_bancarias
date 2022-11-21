import { DataSource } from "typeorm";
import { Transactions } from "../models/Transactions"
import { IDataSourceConfig } from "../database/interfaces/IDataSourceConfig";
import { injected } from "brandi";
import { TOKENS } from "../../container";

export class TransactionsService {
   private dataSource : DataSource;
    constructor(config: IDataSourceConfig) {
        this.dataSource = config.getDataSource();
        this.dataSource.initialize();
    }
  
    // createUserEntity(){ 
    //     const transactions = new Transactions(
    //       0,
    //       new Date,
    //       new Date,
    //       'Mateus',
    //       'Junior',
    //       '12345678910111',
    //       true,
    //       'mateus@teste.com',
    //       'teste',
    //       null
    //     );
    //     this.dataSource.manager.save(transactions);
    // }
        
}
injected(TransactionsService, TOKENS.dataSourceConfig);