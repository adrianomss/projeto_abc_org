/* Referência ao endpoint de candidatos */
let urlCandidatos = "http://localhost:3000/candidatos";
/* Referência para o formulário */
const formCadastro = $("#form-cadastro");
/* Manipulador de evento para o formulário */
formCadastro.on("submit", function( event ){
    event.preventDefault();
    
    // Capturando os dados preenchidos no formulário

    let dados ={

        nome:$( "#nome").val(),
        data:$("#data").val(),
        telefone:$("#telefone").val(),
        email:$("#email").val(),
        //vaga:$("#vagas").val(),

        vaga:$("#vagas").find(":selected").text()
    };

    /* Ajax via jQuery */
    $.ajax({
        url: urlCandidatos,
        method:"POST",// Envio de dados
        data: dados,
        success: function () {

            //console.log(" Dados enviados com sucesso");
            pMensagem.text(" Dados enviados com sucesso");
            pMensagem.css("color","blue");
            formCadastro[0].reset();
        },

            error: function () {
               // console.log("Não foi possivel enviar os dados !!");
                pMensagem.text("Não foi possivel enviar os dados !!");
                pMensagem.css("color","blue");
                
            } //VERIFICAR SOBRE PMENSAGEM 



    });


});