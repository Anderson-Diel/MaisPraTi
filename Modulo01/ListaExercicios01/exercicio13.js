// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. 

const prompt = require('prompt-sync')()
let soma = 0
let cont = 0
console.log('DIGITE OS NÚMEROS ABAIXO. PARA ENCERRAR DIGITE ZERO(0)')
let num = parseFloat(prompt('DIGITE UM NÚMERO: '))
while (num != 0){
    soma+=num
    cont++
    num = parseFloat(prompt('DIGITE O PRÓXIMO NÚMERO: '))
}
if (cont!== 0){
    let media = soma/cont
    console.log(`A média aritmética dos números digitados é: ${media.toFixed(2)}.`)
} else{
    console.log('Nenhum número foi digitado. Encerrando o programa.')
}