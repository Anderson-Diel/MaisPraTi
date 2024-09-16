
// 11. Agrupando Elementos com forEach
// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

const pedidos = [
    { cliente: 'João', produto: 'Notebook', quantidade: 1 },
    { cliente: 'Maria', produto: 'Smartphone', quantidade: 2 },
    { cliente: 'João', produto: 'Tablet', quantidade: 1 },
    { cliente: 'Ana', produto: 'Smartphone', quantidade: 1 },
    { cliente: 'Maria', produto: 'Notebook', quantidade: 1 }
  ]
  
  let totalPorCliente = {}
  
  pedidos.forEach(pedido => {
    let { cliente, quantidade } = pedido
  
    if (totalPorCliente[cliente]) {
      totalPorCliente[cliente] += quantidade
    } else {
      totalPorCliente[cliente] = quantidade
    }
  })
  
  console.log(totalPorCliente)