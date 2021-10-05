const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const containName = arr.some((element) => element === name);
  return containName;
};

console.log(hasName(names, 'Anas'));