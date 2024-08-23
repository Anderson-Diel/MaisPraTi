// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. 

const prompt = require('prompt-sync')()

let nMacas = Number(prompt('DIGITE A QUANTIDADE DE MAÇÃS COMPRADAS: '))
let preco1 = 0.30
let preco2 = 0.25
let precoTotal = 0

if (nMacas < 12){
    precoTotal = (nMacas * preco1).toFixed(2)
    console.log(`O preço total das ${nMacas} maçãs é R$ ${precoTotal}`)
} else {
    precoTotal = (nMacas * preco2).toFixed(2)
    console.log(`O preço total das ${nMacas} maçãs é R$ ${precoTotal}`)
}