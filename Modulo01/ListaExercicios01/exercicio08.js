// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente. 

const prompt = require('prompt-sync')()

let valor1 = Number(prompt('DIGITE O PRIMEIRO VALOR: '))
let valor2 = Number(prompt('DIGITE O SEGUNDO VALOR : '))

if (valor1 !== valor2){
    if (valor1 < valor2) {
        console.log(valor1)
        console.log(valor2)
    } else {
        console.log(valor2)
        console.log(valor1)
    }
} else {
    console.log('OS VALORES SÃO IGUAIS.')
}