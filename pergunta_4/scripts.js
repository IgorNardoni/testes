// - Dado o array [9, 2, 3, 1, 4] encontre todos os números que estão faltando para completar o intervalo de 0 a n, onde n é o maior número dentro do array. Adicione os números faltando dentro do array. 

const arr = [9, 2, 3, 1, 4];
const max = Math.max(...arr);
const completeArr = Array.from({length: max + 1}, (_, i) => i);
const missingNumbers = completeArr.filter(num => !arr.includes(num));
arr.push(...missingNumbers);
console.log(arr); // [9, 2, 3, 1, 4, 5, 6, 7, 8]

/* 
Para este questionamento utilizei a função Math.max e o método de array filter()
*/