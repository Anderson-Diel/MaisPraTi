// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada. 

const prompt = require('prompt-sync')()

console.log('ESCOLHA UMA DAS OPÇÕES ABAIXO:')
console.log('1 - MANHÃ')
console.log('2 - TARDE')
console.log('3 - NOITE')

const turno = prompt('DIGITE A OPÇÃO DESEJADA: ')

switch (turno){
    case '1': console.log(`Você escolheu a opção "${turno} - MANHÃ"`)
    break
    case '2': console.log(`você escolheu a opção "${turno} - TARDE"`)
    break
    case '3': console.log(`você escolheu a opção "${turno} - NOITE"`)
    break
    default: console.log('Você não escolheu nenhuma das opções apresentadas.')
    break
}
