const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    const flattenStuff = arrays.reduce((previousValue, current) => {
        return `${previousValue} ${current}`.split(', ')});
    return flattenStuff;
  }

  console.log(flatten());