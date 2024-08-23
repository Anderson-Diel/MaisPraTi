// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if. 

const prompt = require('prompt-sync')()

NumPouI = Number(prompt('DIGITE UM NÚMERO PARA VERIFICAR SE É PAR OU IMPAR: '))

// if (NumPouI % 2 === 0) {
//     console.log(`${NumPouI} é um número PAR!`)
// } else {
//     console.log(`${NumPouI} é um número ÍMPAR!`)
// }


NumPouI % 2 === 0 ? console.log(`${NumPouI} é um número PAR`) : console.log(`${NumPouI} é um número ÍMPAR`)