// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

const prompt = require('prompt-sync')()

let numAnt = 0
let numProx = 1
let fibo = 0

for (let i=0; i<10; i++){
    console.log(numAnt)
    fibo = numAnt+numProx
    numAnt = numProx
    numProx = fibo
}