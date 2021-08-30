function maior(a,b){
    if(a>b){
        return "o maior número é o " + a
    }
    else if(b>a){
        return "o maior número é o " + b;
    }
    else{
        return "sao iguais";
  }
}
let resultado = maior(7,8);
console.log(resultado);
