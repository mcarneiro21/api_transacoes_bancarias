import { AnyMxRecord } from "dns"
import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { Transactions } from "../models/Transactions";
import { User } from "../models/User"
import { Wallet } from "../models/Wallet";

export default class DataSourceConfig {
    source:DataSource;

    constructor(type: any, host: string, port: number, username: string, password: string, database:string, synchronize: boolean = true, logging: boolean = false) {
        this.source = new DataSource({
            type,
            host,
            port,
            username,
            password,
            database,
            entities: [User, Wallet, Transactions],
            synchronize,
            logging,
        })
    }

    getDataSource() : DataSource {
        return this.source;
    }

}