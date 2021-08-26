let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];
for ( let index =0; index<numbers.length; index +=1){
    if(index<numbers.lenght-2){
        let posicao = numbers[index]*numbers[index+1];
        array.push(posicao);
    }
    else{
        posicao = numbers[index]*2;
    }
}
console.log(array);