// Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

const produtos = {
    valor1: 100,
    valor2: 200,
    valor3: 300,
    valor4: 400,
    valor5: 500,
    valor6: 600,
    valor7: 700,
    valor8: 800,
    valor9: 900,
    valor10: 1000
}

function filtraPropriedades(produtos){
    let novoProduto = {}
    for (let propriedade in produtos){
        if (produtos[propriedade] > 500){
            novoProduto[propriedade] = produtos[propriedade]
        }
    }
return novoProduto
}  

console.log(filtraPropriedades(produtos))

