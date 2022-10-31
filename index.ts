import express, {Express, Request, Response} from 'express';
import "reflect-metadata";
import * as dotenv from 'dotenv';
import DataSourceConfig from "./app/database/DataSourceConfig";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const dataSource = new DataSourceConfig(
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
});

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});
