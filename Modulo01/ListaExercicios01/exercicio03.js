// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. 

const prompt = require('prompt-sync')()

nota1 = Number(prompt('DIGITE SUA NOTA 1: '))
nota2 = Number(prompt('DIGITE SUA NOTA 2: '))
nota3 = Number(prompt('DIGITE SUA NOTA 3: '))
media = ((nota1 + nota2 + nota3) / 3)

if (media >= 7){
    console.log(`SUA MÉDIA É ${media.toFixed(2)}: APROVADO`)
} else if (media >= 5){
    console.log(`SUA MÉDIA É ${media.toFixed(2)}: RECUPERAÇÃO`)
} else {
    console.log(`SUA MÉDIA É ${media.toFixed(2)}: REPROVADO`)
}
