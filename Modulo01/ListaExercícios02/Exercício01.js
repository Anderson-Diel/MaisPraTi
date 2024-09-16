// Acessando Propriedades de Objetos
// Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.


const carros = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2020,
    cor: "prata",
}

for (let carro in carros){
    console.log(`${carro}: ${carros[carro]}`)
}

