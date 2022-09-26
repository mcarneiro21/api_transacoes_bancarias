import { AnyMxRecord } from "dns"
import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "../models/User"

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
            entities: [User],
            synchronize,
            logging,
        })
    }

    getDataSource() : DataSource {
        return this.source;
    }

}