<?php

function verificaSoma($arr, $x) {
    $soma = array();
    foreach($arr as $num) {
        $diff = $x - $num;
        if (in_array($diff, $soma)) {
            return true;
        }
        array_push($soma, $num);
    }
    return false;
}

$nums = [1, 15, 2, 7, 2, 5, 7, 1, 4];

echo verificaSoma($nums, 2) ? 'true' : 'false'; // retorna true

echo verificaSoma($nums, 1231) ? 'true' : 'false'; // retorna false

?>


/* Utilizei o "two-pointer", usando apenas um loop e um array extra para armazenar informações que preciso.*/