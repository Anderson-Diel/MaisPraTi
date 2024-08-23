const prompt = require('prompt-sync')()



// let num1 = Number(prompt('DIGITE UM NÚMERO: '))

// if (num1 > 0){
//     console.log(num1, "é um número positivo")
// }else if(num1 < 0){
//     console.log(num1, "é um número negativo")
// }else{
//     console.log(num1, "é ZERO")
// }


// let nota1 = Number(prompt('DIGITE A PRIMEIRA NOTA: '))
// let nota2 = Number(prompt('DIGITE A SEGUNDA NOTA: '))
// let nota3 = Number(prompt('DIGITE A TERCEIRA NOTA: '))

// media = ((nota1+nota2+nota3)/3)

// if (media>=7){
//     console.log(`SUA MÉDIA É: ${media}, "APROVADO"`)
// }


//ARRAY OU VETORES
// array no JS é um objeto, ou seja, tem métodos.

// let carros = array()
// carros[0] = 'civic'
// carros[1] = 10
// carros[2] = true
// carros['Hyago'] = '10' 

// let motos = array('CBR','ninja',10)

// let livros = ['senhor do aneis','o hobbit','harry potter']
// console.log(livros)

// let soma = 0
// let maior = 0
// let vetor = [90,50,60,40]

// for (let i = 0; i < vetor.length; i++){
//     soma+=vetor[i]
// }
// console.log(soma)

// for (let i=0; i<vetor.length; i++){
//     if (vetor[i] > maior){
//         maior = vetor[i]
//     }
// }
// console.log(maior)

// let inverso = []

// for(let k=vetor.length-1; k>=0; k--){
//     inverso.push(inverso[k])
// }
// console.log(inverso)


let vetor = [0,1,2,3,4,5,0,1,2,2,3,3,4,5]
let cont = 0
proc = Number(prompt('DIGITE O NÚMERO A SER PESQUISADO: '))

for (let i=0; i<vetor.length; i++){
    if (vetor[i] === proc){
        cont++
    }
}
console.log(`O ${proc} APARECE ${cont} VEZES.`)