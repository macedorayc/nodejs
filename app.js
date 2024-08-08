import express from 'express';
import cors from 'cors';

const servidor = express();
servidor.use(express.json());
servidor.use(cors());


servidor.get ('/helloworld', (req, resp) => {
    // codigo o endpoint
    //ex para n retornar string
    resp.send({
        mensagem: 'Hello world!'
    });
})


servidor.get('/mensagem/boasvindas', (req, resp) => {
    resp.send('Olá, sejam bem-vindos e bem-vindas!');
})


servidor.get('/v2/mensagem/boas', (req, resp) => {
    resp.send('Que bom que vc esta aqui s2');
})


servidor.get('/mensagem/ocupado', (req, resp) => {
    resp.send({
        mensagem: 'Estou ocupado, deixe uma mensagem no emil xxxx'
    });
})


servidor.get('/calculadora/somar/:n1/:n2', (req, resp) => {
    if (isNaN(req.params.n1) || isNaN(req.params.n2)) {
        resp.status(400).send({
            erro: 'Os parâmetros devem ser números'
        })
        return;
    }

    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2;

    resp.send({ 
        entradas: {
            numero1: n1,
            numero2: n2
        },
        soma: soma
    });
}) 

servidor.get('/mensagem/ola', (req, resp) => {
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


servidor.post('/media', (req, resp) => {
    let n1 = req.body.nota1;
    let n2 = req.body.nota2;
    let n3 = req.body.nota3;

    let media = (n1 + n2 + n3) / 3;

    resp.send({
        media: media
    });
})


servidor.post('/dobros', (req, resp) => {
    let nums = req.body.numeros;

    let nums2 = [];
    for (let i = 0; i < nums.length; i++) {
        nums2[i] = nums[i] * 2;
    }

    resp.send('Os dobros dos numeros são' + nums2);
})



servidor.post('/loja/pedido', (req, resp) => {
    let total = req.body.total;
    let parcelas = req.body.parcela;

    if (parcelas > 1) {
        let juros = total * 0.05;
        total +- juros;
    }

    if (cupom == 'QUERO100') {
        total -= 100;
    }

    let valorparcela = total / parcelas;

    resp.send({
        total: total,
        valorparcelas: valorparcela
    });
})


servidor.post('loja/pedido/completo', (req, resp) => {
    let parcelas = req.body.parcelas;
    let itens = req.body.itens;
    let cupom = req.query.cupom;

    let total = 0;
    for (let produto of itens) {
        total += produto.preco
    }

    if (parcelas > 1) {
        let juros = total * 0.05;
        total += juros;
    }

    if (cupom == 'QUERO100') {
        total -= 100;
    }

    let valorparcela = total/ parcelas;

    resp.send({
        total: total,
        valorparcela: valorparcela
    });
}) 




servidor.listen(
    5001,
     () => console.log('==> API subiu com sucesso na porta 5001!'));

