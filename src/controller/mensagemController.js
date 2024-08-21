import {Router} from "express";

const endpoints = Router();


endpoints.get ('/helloworld', (req, resp) => {
    // codigo o endpoint
    //ex para n retornar string
    resp.send({
        mensagem: 'Hello world!'
    });
})


endpoints.get('/mensagem/boasvindas', (req, resp) => {
    resp.send('Olá, sejam bem-vindos e bem-vindas!');
})


endpoints.get('/v2/mensagem/boas', (req, resp) => {
    resp.send('Que bom que vc esta aqui s2');
})


endpoints.get('/mensagem/ocupado', (req, resp) => {
    resp.send({
        mensagem: 'Estou ocupado, deixe uma mensagem no emil xxxx'
    });
})


endpoints.get('/mensagem/ola', (req, resp) => {
    if (!req.query.nome == null){
        resp.status(400).send({
            erro: 'O parâmetro query (nome) é obrigatorio.'
        })
        return;
    }

    let pessoa = req.query.nome ?? 'você';

    resp.send({
        mensagem: 'Olá' + pessoa
    });
})


export default endpoints;
