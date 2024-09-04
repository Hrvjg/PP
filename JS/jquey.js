// script.js

$(document).ready(function() {
    // Toggle para mostrar ou esconder o parágrafo
    $("#toggleButton").click(function() {
        $("#paragrafo").toggle();
    });

    // Carregar dados usando AJAX quando o botão for clicado
    $("#loadDataButton").click(function() {
        // Exemplo simples de uma requisição AJAX
        $("#dadosContainer").load("https://jsonplaceholder.typicode.com/posts/1", function(responseText) {
            $("#dadosContainer").html("<p>Dados Carregados:</p><pre>" + responseText + "</pre>");
        });
    });
});
