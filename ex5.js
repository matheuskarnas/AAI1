const rl = require('readline-sync')

function calcularMedia() {
  let continuar = true
  while (continuar) {
    let nota1 = parseFloat(rl.question('Digite a primeira nota: '))
    let nota2 = parseFloat(rl.question('Digite a segunda nota: '))
    let nota3 = parseFloat(rl.question('Digite a terceira nota: '))

    let peso1 = 2,
      peso2 = 5,
      peso3 = 3
    let media =
      (peso1 * nota1 + peso2 * nota2 + peso3 * nota3) / (peso1 + peso2 + peso3)

    let classificacao
    if (media > 9) {
      classificacao = 'A'
    } else if (media > 8) {
      classificacao = 'B'
    } else if (media > 7) {
      classificacao = 'C'
    } else if (media > 6) {
      classificacao = 'D'
    } else if (media > 5) {
      classificacao = 'E'
    } else {
      classificacao = 'F'
    }

    console.log(
      `A média do aluno é = ${media.toFixed(
        2
      )} e sua classificacao = ${classificacao}`
    )
    continuar = rl.keyInYN('Deseja calcular a média de outro aluno?')
  }
}

calcularMedia()
