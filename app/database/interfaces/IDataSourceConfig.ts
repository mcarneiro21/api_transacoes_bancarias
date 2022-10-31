import { DataSource } from 'typeorm'

export interface IDataSourceConfig {
    getDataSource() : DataSource;
}