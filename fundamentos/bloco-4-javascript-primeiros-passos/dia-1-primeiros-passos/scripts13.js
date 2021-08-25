let salario = 15000.10;
let inss = 0;
let salarioBase = 0;
let impostoRenda = 0;

let salarioLiquido = salarioBase - impostoRenda;
if(salario <= 1556.94){
    inss = salario * 0.08
    salarioBase = salario - inss;
}
else if( salario >= 1556.95 && salario < 2594.93){
    inss = salario * 0.09;
    salarioBase = salario - inss;
}
else if( salario > 2594.93&& salario <= 5189.82){
    inss = salario * 0.11;
    salarioBase = salario - inss;
}
else{
    inss = 570.88;
    salarioBase = salario - inss;
}
console.log(salarioBase);
if(salarioBase <= 1903.98){
    impostoRenda = 0;
    salarioLiquido = salarioBase;
}
else if(salarioBase > 1903.98 && salarioBase <= 2826.65){
    impostoRenda = salarioBase * 0.075;
    salarioLiquido = salarioBase - impostoRenda;
}
else if(salarioBase > 2826.65 && salarioBase <= 3751.05){
    impostoRenda = salarioBase * 0.15;
    salarioLiquido = salarioBase - impostoRenda;
}
else if(salarioBase > 3751.05 && salarioBase <= 4664.68){
    impostoRenda = salarioBase * 0.225;
    salarioLiquido = salarioBase - impostoRenda;
}
else{
    impostoRenda = salarioBase * 0.275;
    salarioLiquido = salarioBase - impostoRenda - 869.36;
}
console.log(salarioLiquido);





