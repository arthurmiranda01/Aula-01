let numero1 = document.getElementById('numero01') as HTMLInputElement;
let numero2 = document.getElementById('numero02') as HTMLInputElement;
let botao = document.getElementById('calcular')!;
let res = document.getElementById('resultado')!;

function calcular(n1: number, n2: number): number {
    return n1 + n2;
}

botao.addEventListener('click', function(){
    res.innerHTML = calcular( +numero1.value, +numero2.value ).toString(); //+ pra garantir que é número
    
})

