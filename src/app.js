import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

import adicionarRotas from './rotas';


const servidor = express();
servidor.use(express.json());
servidor.use(cors());


//adicionar as rotas
adicionarRotas(servidor);

const PORTA = process.env.PORTA;
servidor.listen(
    process.env.PORTA,
     () => console.log(`---> API subiu com sucesso na porta ${PORTA}!`));

