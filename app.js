import express from 'express';

const servidor = express();
servidor.use(express.json());


servidor.get ('/helloworld', (req, resp) => {
    // codigo o endpoint
    resp.send('Hello world! =))');
})


servidor.get('/mensagem/boasvindas', (req,resp) => {
    resp.send('Olá, sejam bem-vindos e bem-vindas!');
})


servidor.get('/v2/mensagem/boas', (req, resp) => {
    resp.send('Que bom que vc esta aqui s2');
})


servidor.get('/mensagem/ocupado', (req,resp) => {
    resp.send('Estou ocupado, deixe uma mensagem no emil xxxx');
})


servidor.get('/calculadora/:n1/:n2', (req, resp) => {
    let n1 = Number(req.params.n1);
    let n2 = Number(req.params.n2);
    let soma = n1 + n2;

    resp.send('A soma é' + soma);
})


servidor.post('/media', (req,resp) => {
    let n1 = req.body.nota1;
    let n2 = req.body.nota2;
    let n3 = req.body.nota3;

    let media = (n1 + n2 + n3) / 3;

    resp.send('A media é' + media);
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

    resp.send('o total do pedido ficou em' + total);
})








servidor.listen(
    5001,
     () => console.log('==> API subiu com sucesso na porta 5001!'));

