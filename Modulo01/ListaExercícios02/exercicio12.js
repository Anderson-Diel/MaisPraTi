// 12. Atualizando um Array de Objetos
// Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
    { produto: 'Camiseta', quantidade: 5, minimo: 10 },
    { produto: 'Calça', quantidade: 8, minimo: 8 },
    { produto: 'Tênis', quantidade: 2, minimo: 5 },
    { produto: 'Boné', quantidade: 6, minimo: 10 }
  ]
  
  estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2
    }
  })
  
  console.log(estoque)
  