var botaoImportar = document.querySelector("#importar-paciente");

botaoImportar.addEventListener("click",function(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var pacientes = JSON.parse(xhr.responseText);
        if(xhr.status == 200){
            pacientes.forEach(p=> adicionaPacineteNaTabela(p));
        }
    });

    xhr.send();
});