// Manipulação de Arrays de Objetos com for of
// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

let pessoas = [
    {
        nome: "Anderson",
        idade: 37,
        cidade: "Porto Alegre",
    },
    {
        nome: "Cairo",
        idade: 34,
        cidade: "Jaraguá",
    },
]

for (let pessoa of pessoas){
    console.log(pessoa)
}