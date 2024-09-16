// 14. Manipulando Objetos Complexos
// Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

const empresa = {
    departamentos: [
      {
        nome: 'Recursos Humanos',
        funcionarios: ['Anderson', 'Carlos', 'Beatriz']
      },
      {
        nome: 'TI',
        funcionarios: ['Roberto', 'Julia', 'Fernanda']
      },
      {
        nome: 'Financeiro',
        funcionarios: ['Marcos', 'Patrícia']
      }
    ]
  }
  
  for (let departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento.nome}`)
    for (let funcionario of departamento.funcionarios) {
      console.log(`  Funcionário: ${funcionario}`)
    }
    console.log('_____________________________')
  }
  