// Verificando Propriedades
// Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.


const livro = {
    titulo: "teste",
    autor: "Eu mesmo",
    anoPubli: 2024,
    genero: "suspense"
};

if ('editora' in livro) {
    console.log("A propriedade 'editora' já existe.");
} else {
    livro.editora = "SeiLá";
    console.log("A propriedade 'editora' foi adicionada.");
}

console.log(livro);

