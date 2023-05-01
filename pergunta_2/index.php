/* 
Dada a seguinte arvore binária de palavras, faça uma função que busque nessa arvore pela palavra-chave. O output da sua função deve ser o caminho até chegar no item procurado. 
*/

<?php

class Node {
  public $value;
  public $left;
  public $right;

  public function __construct($value) {
    $this->value = $value;
    $this->left = null;
    $this->right = null;
  }
}

class BinaryTree {
  public $root;

  public function __construct() {
    $this->root = null;
  }

  public function search($value) {
    $path = [];

    if ($this->root === null) {
      return null;
    }

    $current = $this->root;

    while ($current !== null) {
      array_push($path, $current->value);

      if ($current->value === $value) {
        return implode(' -> ', $path);
      }

      if ($value < $current->value) {
        $current = $current->left;
      } else {
        $current = $current->right;
      }
    }

    return null;
  }
}

$tree = new BinaryTree();
$tree->root = new Node('Maçã');
$tree->root->left = new Node('Morango');
$tree->root->left->left = new Node('Goiaba');
$tree->root->left->right = new Node('Limão');
$tree->root->right = new Node('Pêra');
$tree->root->right->left = new Node('Abacaxi');
$tree->root->right->right = new Node('Laranja');
$tree->root->right->right->right = new Node('Banana');
$tree->root->right->right->left = new Node('Cebola');

$resultado = $tree->search('Goiaba');
echo $resultado;


?>