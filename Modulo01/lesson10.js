
let listaFrutas = ['maça','banana','melancia','uva','morango']
// console.log(listaFrutas.sort())

// let listaNumeros = [10,12,0,16,7,9]
// console.log(listaNumeros.sort((a,b) => a-b))

// console.log(listaFrutas.indexOf('morango'))
// let index = listaFrutas.indexOf('morango')
// if (index === -1){
//     console.log('O elemento não existe')
//     else{
//         console.log('O elemento está na posição:', index)
//     }
// }

function ordenar(listaFrutas){
    return listaFrutas.sort()
}
console.log(ordenar(listaFrutas))

