import express, {Express, Request, Response} from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Iniciando o projeto');
});

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});
