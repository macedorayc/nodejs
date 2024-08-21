import { logError } from "../utils/log.js";
import { criarErro } from "../utils/error.js";

import { CalcularTotal, calcularValorParcela } from "../service/loja/pedidoCompletoService.js";
import { validarPedidoCompleto } from "../validation/loja/pedidoCompletoValidation.js";

import {Router} from "express";
const endpoints = Router();


endpoints.post('/loja/pedido', (req, resp) => {
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


endpoints.post('loja/pedido/completo', (req, resp) => {
    try {

        validarPedidoCompleto(req);
        
        let parcelas = req.body.parcelas;
        let itens = req.body.itens;
        let cupom = req.query.cupom;

        let total = calcularTotal(parcelas, itens, cupom);
        let valorParcela = calcularValorParcela (total, parcelas);
    
        resp.send({
            total: total,
            valorparcela: valorparcela
        });
    }
    catch (err) {
        logError(err);
        resp.status(400).send(criarErro(err))

    }
}) 

export default endpoints;