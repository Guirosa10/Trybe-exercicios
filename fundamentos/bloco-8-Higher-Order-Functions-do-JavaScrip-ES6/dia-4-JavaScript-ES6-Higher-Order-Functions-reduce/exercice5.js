const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    const getLettera = names.reduce((acc,curr)=>{
        if(curr.includes('a')){
            acc = acc + 1;
        }
        return acc;
    },0)
    return getLettera;
  }

  //console.log(containsA());
  let xablau;
  xablau = names.splice('');

  const getStuff = xablau.reduce((acc,curr) =>{
    for(let index = 0; index < xablau.length; index +=1){
        if(curr.includes('a')){
            acc = acc +1}
    }
    return acc;
},0);

console.log(getStuff);