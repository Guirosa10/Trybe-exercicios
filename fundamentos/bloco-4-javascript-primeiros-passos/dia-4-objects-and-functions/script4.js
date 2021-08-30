
function math(a,b){
    
    let soma = a+b;
    let multiplicação = a*b;
    let divisão = a/b;
    let modulo = a%b;
    let subtracao = a-b;
    let resultados = [soma, subtracao, divisão, modulo, multiplicação];
    return resultados;
}

let resultado = math(3,2);
console.log(resultado);