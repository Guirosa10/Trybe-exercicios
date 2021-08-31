function maiorWord(names){
let maiorPalavra = names[5];
for (key in names){
    if(maiorPalavra.lenght < names[key].lenght){
        maiorPalavra = names[key];
    }
}
return maiorPalavra;
}
console.log(maiorWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));