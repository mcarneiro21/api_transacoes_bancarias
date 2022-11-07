import express, {Express, Request, Response} from 'express';
import "reflect-metadata";
import * as dotenv from 'dotenv';
import DataSourceConfig from "./app/database/DataSourceConfig";
import { apiModule, container, TOKENS } from "./container";
import { UserService } from './app/services/UserService';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
// Inicializando container
apiModule.bind(TOKENS.dbDatabase).toConstant(process.env.DB_DATABASE || '');
apiModule.bind(TOKENS.dbHost).toConstant(process.env.DB_HOST || 'localhost');
apiModule.bind(TOKENS.dbType).toConstant(process.env.DB_TYPE || '');
apiModule.bind(TOKENS.dbPort).toConstant(Number(process.env.DB_PORT) || 5432);
apiModule.bind(TOKENS.dbUser).toConstant(process.env.DB_USER || 'admin');
apiModule.bind(TOKENS.dbPassword).toConstant(process.env.DB_PASSWORD || '');

container.use(TOKENS.dbDatabase).from(apiModule);
container.use(TOKENS.dbHost).from(apiModule);
container.use(TOKENS.dbType).from(apiModule);
container.use(TOKENS.dbPort).from(apiModule);
container.use(TOKENS.dbUser).from(apiModule);
container.use(TOKENS.dbPassword).from(apiModule);
container.bind(TOKENS.dataSourceConfig).toInstance(DataSourceConfig).inSingletonScope();
container.bind(TOKENS.userService).toInstance(UserService).inTransientScope();

const tst = container.get(TOKENS.userService);
tst.createUserEntity();

/* const dataSource = new DataSourceConfig(
    process.env.DB_TYPE,
    process.env.DB_HOST || 'localhost',
    Number(process.env.DB_PORT) || 5432,
    process.env.DB_USER || 'admin',
    process.env.DB_PASSWORD || '',
    process.env.DB_DATABASE || ''
    );
export const appDB = dataSource.getDataSource();

appDB.initialize()
    .then(() => {
    })
    .catch((error) => console.log(error));
app.get('/', (req: Request, res: Response) => {
    res.send('Iniciando o projeto');
}); */

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});
