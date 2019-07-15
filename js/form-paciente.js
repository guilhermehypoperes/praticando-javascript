var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", criaPaciente);

function criaPaciente(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    var erros = validaForm(form); 
    if(erros.length > 0){
        criaMensagemErroNaTela(erros);
        return;
    }
    
    var paciente = obtemPacienteDoForm(form);
    adicionaPacineteNaTabela(paciente);

    limpaMensagensErro();
    form.reset();
};

function validaForm(form){
    var erros = [];

    if(!validaNome(form.nome.value)) erros.push("Nome inválido!")
    if(!validaPeso(form.peso.value)) erros.push("Peso inválido!")
    if(!validaAltura(form.altura.value)) erros.push("Altura inválida!")
    if(!validaGordura(form.gordura.value)) erros.push("Gordura inválida!")

    return erros;
}

function obtemPacienteDoForm(form){
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value,form.altura.value)
    }
}

function criaMensagemErroNaTela(erros){
    var elementErros = document.querySelector(".mensagens-erro");
    limpaMensagensErro();

        erros.forEach(function(erro){
            var li = document.createElement("li");
            li.textContent = erro;
            elementErros.appendChild(li);
        });
}

function limpaMensagensErro(){
    var elementErros = document.querySelector(".mensagens-erro");
    elementErros.innerHTML = "";
}

function adicionaPacineteNaTabela(paciente){
    var novaTr = criaTR(paciente);
    var corpoTabela = document.querySelector("#tabela-pacientes");
    corpoTabela.appendChild(novaTr);
}