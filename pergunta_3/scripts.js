// - Crie uma função que recebe um argumento X e retorne true ou false caso haja no array uma combinação de soma entre dois números que resulte no input X.
// - Exemplo: Se X=2, a função deve retornar true pois existem dois números 1 dentro do array 1+1 = 2. Caso X=1231 a função deve retornar false pois não existe uma combina de dois números capazes de somar 1231.

function hasSumPair(array, X) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === X) {
          return true;
        }
      }
    }
    return false;
  }
  
  const numbers = [1, 15, 2, 7, 2, 5, 7, 1, 4];
  console.log(hasSumPair(numbers, 2)); // true
  console.log(hasSumPair(numbers, 1231)); // false

/* Utilizei dois loops 'for' aninhados para percorrer o array e verificar todas as combinações de soma entre dois números.*/