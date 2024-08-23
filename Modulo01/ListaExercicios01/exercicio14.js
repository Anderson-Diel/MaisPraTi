// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while. 

const prompt = require('prompt-sync')()

let num = Number(prompt('DIGITE UM NÚMERO PARA CALCULAR SEU FATORIAL: '))
let fat = num
let i = (num - 1)

while (i !== 0){
    fat = (fat * i)
    i--
}

console.log(`O FATORIAL DE ${num} é ${fat}. `)