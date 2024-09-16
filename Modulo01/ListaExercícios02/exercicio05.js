// Calculando Valores em Arrays de Objetos
// Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

const alunos = [
    { nome: 'Anderson', nota1: 7, nota2: 8 },
    { nome: 'Fulano', nota1: 9, nota2: 8 },
    { nome: 'Ciclano', nota1: 6, nota2: 7 },
    { nome: 'Beltrano', nota1: 8, nota2: 9 }
  ]
  
  for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`${aluno.nome} - Média: ${media.toFixed(2)}`);
  }
  