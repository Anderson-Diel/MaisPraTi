// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else. 

const prompt = require('prompt-sync')()

let peso = (prompt('DIGITE SEU PESO: '))
let altura = (prompt('DIGITE SUA ALTURA: '))

peso = parseFloat(peso.replace(',','.'))
altura = parseFloat(altura.replace(',','.'))

let imc = (peso / (altura * altura)).toFixed(2)

if (imc < 18.50){
    console.log(`Seu IMC é ${imc}: Baixo peso`)
} else if (imc >= 18.50 && imc < 25){
    console.log(`Seu IMC é ${imc}: Peso normal`)
} else if (imc >=25 && imc < 30){
    console.log(`Seu IMC é ${imc}: Sobrepeso`)
} else{
    console.log(`Seu IMC é ${imc}: Obesidade`)
}