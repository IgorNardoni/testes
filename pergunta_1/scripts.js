// Definir o objetivo
// Ordenar o array de tal forma que os números “1” estejam à esquerda.

// [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21]

function orderArray(array) {
    let index = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 1) {
        let temp = array[i];
        array[i] = array[index];
        array[index] = temp;
        index++;
      }
    }
  
    return array;
  }
  
  let array = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21];
  orderArray(array);
  console.log(array);


/*
O método utilizado percorre o array, verificando se o número é igual a 1. Se sim, o número é colocado na posição atual do index e o index é incrementado. Dessa forma, a cada iteração do laço de array, o número "1" é colocado na próxima posição disponível à esquerda do array, ficando assim sempre a esquerda.
*/ 