const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const find5letterName = names.find((name) => name.length === 5);
  return find5letterName;
}

console.log(findNameWithFiveLetters());