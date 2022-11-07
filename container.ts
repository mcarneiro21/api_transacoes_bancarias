import { Container, token, DependencyModule } from 'brandi'
import { IDataSourceConfig } from './app/database/interfaces/IDataSourceConfig'
import { UserService } from './app/services/UserService';

export const TOKENS = {
    dbType: token<any>('dbType'),
    dbHost: token<string>('dbHost'),
    dbPort: token<number>('dbPort'),
    dbUser: token<string>('dbUser'),
    dbPassword: token<string>('dbPassword'),
    dbDatabase: token<string>('dbDatabase'),
    dbSynchronize: token<boolean>('dbSynchronize'),
    dbLogging: token<boolean>('dbLogging'),
    dataSourceConfig: token<IDataSourceConfig>('dataSourceConfig'),
    userService: token<UserService>('userService')
};

export const apiModule = new DependencyModule();
export const container = new Container();
