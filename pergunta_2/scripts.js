/* 
Dada a seguinte arvore binária de palavras, faça uma função que busque nessa arvore pela palavra-chave. O output da sua função deve ser o caminho até chegar no item procurado. 
*/


class No {
    constructor(palavra) {
      this.palavra = palavra;
      this.esquerda = null;
      this.direita = null;
    }
  }
  
  class ArvoreBinaria {
    constructor() {
      this.raiz = null;
    }
  
    inserir(palavra) {
      const novoNo = new No(palavra);
  
      if (this.raiz === null) {
        this.raiz = novoNo;
      } else {
        this.inserirNo(this.raiz, novoNo);
      }
    }
  
    inserirNo(noAtual, novoNo) {
      if (novoNo.palavra < noAtual.palavra) {
        if (noAtual.esquerda === null) {
          noAtual.esquerda = novoNo;
        } else {
          this.inserirNo(noAtual.esquerda, novoNo);
        }
      } else {
        if (noAtual.direita === null) {
          noAtual.direita = novoNo;
        } else {
          this.inserirNo(noAtual.direita, novoNo);
        }
      }
    }
  
    buscar(palavra) {
      const caminho = [];
  
      if (this.raiz === null) {
        return null;
      }
  
      let noAtual = this.raiz;
      while (noAtual !== null) {
        caminho.push(noAtual.palavra);
  
        if (palavra === noAtual.palavra) {
          return caminho.join(' -> ');
        } else if (palavra < noAtual.palavra) {
          noAtual = noAtual.esquerda;
        } else {
          noAtual = noAtual.direita;
        }
      }
  
      return null;
    }
  }
  
  const arvore = new ArvoreBinaria();
  arvore.inserir('Maçã');
  arvore.inserir('Morango');
  arvore.inserir('Goiaba');
  arvore.inserir('Limão');
  arvore.inserir('Pêra');
  arvore.inserir('Abacaxi');
  arvore.inserir('Laranja');
  arvore.inserir('Banana');
  arvore.inserir('Cebola');
  
  console.log(arvore.buscar('Goiaba')); // Saída: "Maçã -> Morango -> Goiaba"
  