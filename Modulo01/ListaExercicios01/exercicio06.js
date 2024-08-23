// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. 

const prompt = require("prompt-sync")();

let ladoA = parseFloat(prompt('DIGITE A MEDIDA DO LADO A: '))
let ladoB = parseFloat(prompt('DIGITE A MEDIDA DO LADO B: '))
let ladoC = parseFloat(prompt('DIGITE A MEDIDA DO LADO C: '))

if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA){
    if (ladoA == ladoB && ladoB == ladoC){
        console.log('TRIANGULO EQUILÁTERO')
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC ){
        console.log('TRIÂNGULO ISÓCELES')
    } else if (ladoA != ladoB && ladoA != ladoC && ladoB != ladoC) {
        console.log('TRIÂNGULO ESCALENO')
    }
} else {
    console.log('ESTAS MEDIDAS NÃO FORMAM UM TRIÂNGULO')
}