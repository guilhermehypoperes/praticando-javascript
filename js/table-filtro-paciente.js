var pacientes;

var inputFiltro = document.querySelector("#filtrar-tabela");


inputFiltro.addEventListener("input",function(){
    pacientes = document.querySelectorAll(".paciente");

    if(this.value.length>0){
        var expressao = new RegExp(this.value,"i");
        pacientes.forEach((paciente)=>{
            var nomePaciente = paciente.querySelector(".info-nome").textContent;
            if(!expressao.test(nomePaciente)) paciente.classList.add("aplica-filtro");
            else paciente.classList.remove("aplica-filtro");
        })
    }else{
        pacientes.forEach(p => p.classList.remove("aplica-filtro"));
    }
});