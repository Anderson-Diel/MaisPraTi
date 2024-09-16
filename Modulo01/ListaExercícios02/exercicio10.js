// Combinação de Estruturas
// 10. Criando Relatórios com Objetos e Arrays
// Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

const vendas = [
    {produto: "Notebook", quantidade: 2, valor: 3300},
    {produto: "Smartphone", quantidade: 3, valor: 2300},
    {produto: "Teclado", quantidade: 5, valor: 99},
    {produto: "Mouse", quantidade: 4, valor: 150}
]

let valorTotalVendas = 0

vendas.forEach(venda => {
    valorTotalVendas += venda.quantidade * venda.valor
})

console.log(`O valor total de vendas é: R$ ${valorTotalVendas.toFixed(2)}`)
