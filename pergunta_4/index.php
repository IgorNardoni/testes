// - Dado o array [9, 2, 3, 1, 4] encontre todos os números que estão faltando para completar o intervalo de 0 a n, onde n é o maior número dentro do array. Adicione os números faltando dentro do array. 

<?php

$array = [9, 2, 3, 1, 4];
$max = max($array);
$range = range(0, $max);
$missing = array_diff($range, $array);
$array = array_merge($array, $missing);

print_r($array); 


?>

/*
usei a função range() para criar um novo array com todos os números de 0 até o 9 e a função array_diff() para encontrar os números que estão faltando no array original em relação ao novo array.
Por fim, usei a função array_merge() para adicionar os números faltando dentro do array original.
*/