

// // let teste = function () {
// //     console.log('Olá mundo')
// // }

// // teste()


// // function showFunction(sucessCallback, errorCallback) {
// //         if (true){
// //             sucessCallback('Requisição bem sucedida')
// //         }else{
// //             errorCallback('erro na requisição')
// //         }
        
// //     }

// // let sucessCallback = function(message) {
// //     console.log(message)
// // }

// // let errorCallback = (message) => {
// //     console.log(message)
// // }

// // showFunction(sucessCallback, errorCallback)

// let elementos = [10,20,30,40,50]
// let soma = 0

// function somarElementos(elementos){
    
//     for (let i=0; i< elementos.length; i++){
//         soma+=elementos[i];
//     }
//     return soma
// }

// console.log(soma)

let nome = "equipe olimpica"

console.log('ANDERSON'.length) //tamanho da string

console.log('anderson'.charAt(0))

console.log(nome.indexOf('d'))

console.log(nome.substr(7,8)) //subtrai 8 caracteres a partir da setima String. se omitir o 8 exclui todos a partir do setimo caracter

console.log(nome.replace('anderson','Lino'))

console.log(nome.toUpperCase()) //transforma em maiusculas
console.log(nome.toLocaleLowerCase()) // transforma em minusculas

console.log(nome.trim()) //excluí espaços em branco das extremidades


//metodos matematicos

console.log(Math.ceil(100.73)) // arredonda pra cima
console.log(Math.floor(100.73)) // arredonda pra baixo
console.log(Math.round(100.73)) //arredonda para cima ou baixo
console.log(Math.sqrt(100.73))
console.log(Math.pow(100.73))
console.log(Math.cbrt(100.73))
console.log(Math.abs(100.73))
console.log(Math.random(100.73)) // numero aleatorio

// DATAS

let data = new Date()
console.log(data.getDate())

console.log(data.getMonth() + 1)

console.log(data.getFullYear())

console.log(data.toString())

data.setDate(data.getDate() + 720)

console.log(data.toString())



