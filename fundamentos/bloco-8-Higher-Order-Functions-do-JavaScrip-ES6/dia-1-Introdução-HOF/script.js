// função acordando
const acordando = () => 'Acordando!!';

// Função novo empregado
const empregado = (name) =>{
    const email = name + '@trybe.com'
    return { Nome: name, UserEmail: email};
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

// função número do sorteio

const randomNumber = () => {
    const number = Math.floor(Math.random() * (5 - 1) + 1);
    return number;
}

const lotteryChecker = (lottery, randomNumberGen) => {
    randomNumberGen();
    if( lottery === randomNumberGen()){
        return 'Parabéns você ganhou';
    }
    return 'Tente novamente';
}

// contador de questões corretas

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correctAnswersChecker = (array1,array2) => {
    let counter = 0;
    for (let index = 0; index < array1; index +=1){
        if(array1[index] === array2[index]){
            counter += 1;}
        else{ counter = counter - 0.5}
    }
return counter;
}

const check = (counterFunction) => {
   return counterFunction();
}

const check2 = () => {
    const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
    let counter = 0;
    for (let index = 0; index<10; index +=1){
        if(RIGHT_ANSWERS[index] === STUDENT_ANSWERS[index]){
            counter += 1;}
        else{ counter = counter - 0.5}
    }
return counter;
}
    
