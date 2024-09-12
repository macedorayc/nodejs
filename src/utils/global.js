import {horaAtual} from "datetime.js";



globalThis.criarErro = function criarErro(err) {
    let obj = {
        erro: err.message
    }

    return obj;
}


global.logError = function logError(err) {
    console.log(horaAtual() + 'ERROR -->' + err.message)
}