/* Referencia ao webservice/api */

let urlVagas=" http://localhost:3000/vagas";


/*  Definindo um array para as vagas */
let vagas=[];

/* Selecionando o select do (DOM) */

const selectVagas=document.querySelector("#vagas");

/* Acessar a api para consumir os dados das vagas */

fetch(urlVagas)
.then(resposta => resposta.json())
.then(dados => {console.log(dados)

    vagas=dados;

    selectVagas.innerHTML="<option></option>";


    for (let vaga of vagas){
        let opcao=document.createElement("option");
        opcao.textContent=vaga.titulo;
        selectVagas.appendChild(opcao)
    }

});