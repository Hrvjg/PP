// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Manipulação do DOM
    document.getElementById("domButton").addEventListener("click", function() {
        document.getElementById("domText").innerText = "O texto foi alterado pelo JavaScript!";
    });

    // Interação com o Usuário
    document.getElementById("greetButton").addEventListener("click", function() {
        const name = document.getElementById("nameInput").value;
        document.getElementById("greetingMessage").innerText = `Olá, ${name}! Bem-vindo!`;
    });

    // Cálculos Simples
    document.getElementById("calcButton").addEventListener("click", function() {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const result = num1 + num2;
        document.getElementById("calcResult").innerText = `Resultado: ${result}`;
    });
});
