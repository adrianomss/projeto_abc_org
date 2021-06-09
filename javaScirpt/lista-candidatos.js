/*  Referência á API , endpoint de candidatos */

let urlCandidatos = "http://localhost:3000/candidatos";


/* Constantes para os elementos */
const botaoListar = $("#listar");
const listaCandidatos = $("#lista-candidatos");

/*  Manipulando evento de click no botão */

botaoListar.on("click", function () {

    $.ajax({
        url: urlCandidatos,
        dataType: "json",
        mathod: "GET", /*  ACesso a leitura de dados */

        success: function (resposta) {
            //console.log(resposta);
            /* Loop $.each jQuery:
            Para cada resposta da API,
            manipule os dados gerados */
            $.each(resposta, function (indice, item) {
                //console.log(indice, item);

                listaCandidatos.append(
                    ` <li class="list-group-item">
                    ${item.nome}
                    </li>`
                );

            });

        },
        error: function () {

            console.log("\n Não foi possivel acessar a lista de candidatos.\n :/ Contate o administrador !");

        }

    })

})
