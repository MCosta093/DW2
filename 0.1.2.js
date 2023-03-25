function compra(valor, convenio, cartao) {
    let desconto15 = (valor * 0.15);
    let desconto10 = (valor * 0.10);
    let somaDesconto = desconto10 + desconto15;

    console.log("Desconto total: R$"+somaDesconto);

    if (convenio && cartao) {
        if (somaDesconto <= 100) {
            return valor - desconto15;            
        } else {
            return valor - 100;
        }

    } else if (convenio || cartao) {
        if (somaDesconto <= 100) {
            return valor - desconto10;
        } else {
            return valor - 100;
        }
    } else {
        return valor;
    }
}
let pagamento = compra(100, false, true);
console.log('Valor Total da Compra: R$'+pagamento);

