

export function validarPedidoCompleto(req) {

    if (!req.body.parcelas || isNaN(req.body.parcelas)) 
        throw new Error('O parâmetro parcela esta inválido')
    if (req.body.itens) 
        throw new Error('O parâmetro itens esta inválido')
}