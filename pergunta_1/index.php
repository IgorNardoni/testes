<?php
// Definir o objetivo
// Ordenar o array de tal forma que os números “1” estejam à esquerda.

// Função para ordenar o array
function sortArray(&$arr) {
    $count = count($arr);
    $j = 0;
    for ($i = 0; $i < $count; $i++) {
        if ($arr[$i] == 1) {
            $temp = $arr[$j];
            $arr[$j] = $arr[$i];
            $arr[$i] = $temp;
            $j++;
        }
    }
}

// Array de inteiros para ordenar
$arr = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21];

// Imprimir o array desordenado
echo "Array desordenado: " . implode(", ", $arr) . "\n";

// Ordenar o array
sortArray($arr);

// Imprimir o array ordenado
echo "Array ordenado: " . implode(", ", $arr) . "\n";
?>
