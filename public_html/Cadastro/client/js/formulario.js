Template.formulario.events({

    "click #botao": function (e, template) {
        e.preventDefault();

        var servico = "http://api.postmon.com.br/v1/cep/";
        var cep = $("#texto");
        function onCepDone(data) {
      $("#endereco").val(data.logradouro).attr("disabled", true) ;
      $("#bairro").val(data.bairro);
      $("#cidade").val(data.cidade);
      $("#estado").val(data.estado) ;
    }
    function onCepError() {
        alert("CPF inválido");
    }
    $.getJSON(servico + cep.val())
            .done(onCepDone)
            .fail(onCepError);

    }});
