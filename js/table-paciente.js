function validacaoTrPaciente(paciente){
    var pesoPaciente = paciente.querySelector(".info-peso").textContent;
    var alturaPaciente = paciente.querySelector(".info-altura").textContent;

    if(!validaAltura(alturaPaciente)){
        paciente.querySelector(".info-imc").textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }else if(!validaPeso(pesoPaciente)){
        paciente.querySelector(".info-imc").textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }else{
        var imc = calculaIMC(pesoPaciente, alturaPaciente);
        paciente.querySelector(".info-imc").textContent = imc;
    }
}

function criaTR(paciente){
    var newTr = document.createElement("tr");

    newTr.appendChild(criaTD(paciente.nome,"info-nome"));
    newTr.appendChild(criaTD(paciente.peso,"info-peso"));
    newTr.appendChild(criaTD(paciente.altura,"info-altura"));
    newTr.appendChild(criaTD(paciente.gordura,"info-gordura"));
    newTr.appendChild(criaTD(paciente.imc,"info-imc"));

    newTr.classList.add("paciente");

    return newTr;
}

function criaTD(text,classe){
    var newTd = document.createElement("td");
    newTd.textContent = text;
    newTd.classList.add(classe);

    return newTd;
}

