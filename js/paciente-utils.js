function calculaIMC(peso,altura){
    var imc = peso / (altura*2);
    return imc.toFixed(2);
}

function validaAltura(altura){
    return ( altura != "" && (altura > 0 && altura < 3.00)) ? true : false;
}

function validaPeso(peso){
    return (peso != "" && (peso > 0  && peso < 1000)) ? true : false;
}

function validaNome(nome){
    return (nome!="") ? true : false;
}

function validaGordura(gordura){
    return (gordura!="" && gordura > 0) ? true : false;
}