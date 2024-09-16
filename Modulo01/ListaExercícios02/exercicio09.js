// 9. Contabilizando Elementos com uma Condição
// Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

const clientes = [
    {nome: "Anderson", idade: 37, cidade: "Porto Alegre"},
    {nome: "Maria", idade: 28, cidade: "Rio de Janeiro"},
    {nome: "Carlos", idade: 40, cidade: "Belo Horizonte"},
    {nome: "Ana", idade: 25, cidade: "Curitiba"},
    {nome: "João", idade: 32, cidade: "Florianópolis"}
]

let contador = 0

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contador++
    }
})

console.log(`O número de clientes com mais de 30 anos é: ${contador}`)
