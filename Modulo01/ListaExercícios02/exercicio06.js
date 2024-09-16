// 6. Filtrando Arrays de Objetos
// Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

const funcionarios = [
    {nome: "Anderson", cargo: "assistente admin", salario: 4500},
    {nome: "Rodrigo", cargo: "QA", salario: 6000},
    {nome: "João", cargo: "gerente", salario: 9500},
    {nome: "Maria", cargo: "designer", salario: 7000},
    {nome: "Ana", cargo: "analista", salario: 6500},
]

let salMinimo = 6000

for (let funcionario of funcionarios) {
    if (funcionario.salario > salMinimo){
        console.log(`Nome: ${funcionario.nome}, cargo: ${funcionario.cargo}, Salário: ${funcionario.salario} `)
    }
}