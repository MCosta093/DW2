function compra(valor, convenio, cartao){
    if (convenio == true && cartao == true){
        return valor-(valor*15/100);
}else if(convenio == true || cartao == true  ){
         return valor-(valor*10/100);
}else{
    return valor;
}
}
let pagamento = compra(100, false, false);
console.log(pagamento)
