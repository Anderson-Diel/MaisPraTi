
// let nome = "admin"
// let senha = 12345

// console.log(nome=="admin" && senha==12345)

// let idade = 33

// if (idade >=18 && idade<=32){
//     console.log('APTO')
// }else{
//     console.log('NÃO APTO')
// }


// let parOuimpar = 48

// if (parOuimpar%2 == 0){
//     console.log(parOuimpar , 'É PAR')
// }else{
//     console.log(parOuimpar, 'É IMPAR')
// }


// let num1 = 50
// let num2 = 40
// let num3 = 30

// if (num1 > num2 && num1 > num3){
//     console.log(num1, 'É O MAIOR')
// }else if(num2 > num1 && num2 > num3){
//     console.log(num2, 'É O MAIOR')
// }else{
//     console.log(num3, 'É O MAIOR')
// }


// ///CALCULADORA

// console.log(num1 + num2)
// console.log(num2 - num3)
// console.log(num1 / num2)
// console.log(num1 * num3)


const prompt = require('prompt-sync')()

let diaDasemana = Number(prompt('DIGITE O DIA DA SEMANA: '))

switch diaDasemana{
    case 1
    console.log ('domingo')
    break

    case 2
    console.log ('segunda')
    break

    default
    console.log('escolha errada')
    break


}
