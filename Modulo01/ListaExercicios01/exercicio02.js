// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else. 

const prompt = require('prompt-sync')()

idade = Number(prompt('DIGITE SUA IDADE: '))

if (idade <= 12){
    console.log('CRIANÇA')
} else if (idade <= 18){
    console.log('ADOLESCENTE')
} else if (idade <= 59){
    console.log('ADULTO(A)')
} else{
    console.log('IDOSO(A)')
}

