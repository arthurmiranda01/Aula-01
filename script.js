var numero1 = document.getElementById('numero01');
var numero2 = document.getElementById('numero02');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString(); //+ pra garantir que é número
});
