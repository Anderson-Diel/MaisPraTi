// Manipulação de Arrays de Objetos com forEach
// 7. Modificando Objetos em um Array
// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

const produtos = [
    {nome: "notebook", preço: 3300, desconto: 0},
    {nome: "smartphone", preço: 2300, desconto: 0 },
    {nome: "teclado", preço: 99, desconto: 0}
]

produtos.forEach(produto => {
    let novoPreco = produto.preço * 0.9
    console.log(`Produto: ${produto.nome}, Preço com desconto: R$ ${novoPreco.toFixed(2)}`)
    


})