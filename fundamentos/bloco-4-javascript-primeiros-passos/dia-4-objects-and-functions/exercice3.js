function maior(){

let array = [2, 3, 6, 7, 10, 1];
let numero = 0;
for (let index in array){
    if( array[numero] < array[index]){
        numero = index;
    }
}
return numero;
}
console.log(maior())