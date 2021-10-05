const books = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
// order crescente

books.sort((a, b) => (a.age) - (b.age));
console.log(books);

//order decrescente

books.sort((a, b) => (b.age) - (a.age));
console.log(books);