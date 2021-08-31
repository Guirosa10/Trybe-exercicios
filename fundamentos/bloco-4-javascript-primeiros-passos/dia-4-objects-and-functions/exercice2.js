    palavra = "arara";
    let receptor = "";
    for (let index = palavra.lenght-1; index <= 0; index--){
        receptor.push(palavra[index]);
    
    }
    if( receptor === palavra){
        console.log("é palindromo");
    }
    else{
        console.log("não é palindromo");
    }






