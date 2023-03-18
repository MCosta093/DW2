function compra(valor, convenio, cartao) {
    if (convenio && cartao) {
        return valor - (valor * 0.15);
    } else if (convenio || cartao) {
        return valor - (valor * 0.10);
    } else {
        return valor;
    }
}
let pagamento = compra(100, true, true);
console.log(pagamento)
