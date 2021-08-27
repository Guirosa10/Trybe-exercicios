let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];
for (let index = 0; index < numbers.length - 1; index += 1) {
  newArray.push(numbers[index] + numbers[index + 1]);
}
newArray.push(numbers[numbers.lenght]*2);
console.log(newArray);
