const rl = require('readline-sync')

function calcularFrete() {
  let continuar = true
  while (continuar) {
    let distancia = parseFloat(rl.question('Digite a distancia (em km): '))
    let quantidadePecas = parseInt(
      rl.question('Digite a quantidade de pecas: ')
    )
    let rastreamento = rl.keyInYN(
      'Deseja rastreamento do pedido? (Custo adicional de R$ 200,00)'
    )

    let regiao
    let valorPorPeca
    while (true) {
      regiao = parseInt(
        rl.question(
          'Escolha a região de destino:\n1 - Sudeste\n2 - Sul\n3 - Centro-Oeste\n'
        )
      )
      switch (regiao) {
        case 1:
          valorPorPeca = 1.2
          break
        case 2:
          valorPorPeca = 1.3
          break
        case 3:
          valorPorPeca = 1.5
          break
        default:
          console.log('Região inválida. Tente novamente.')
          continue
      }
      break
    }

    let custoPecas
    if (quantidadePecas > 1000) {
      let custoNormal = 1000 * valorPorPeca
      let custoDesconto = (quantidadePecas - 1000) * (valorPorPeca * 0.88)
      custoPecas = custoNormal + custoDesconto
    } else {
      custoPecas = quantidadePecas * valorPorPeca
    }

    let custoPorKm = distancia
    let custoRastreamento = rastreamento ? 200 : 0
    let custoTotal = custoPecas + custoPorKm + custoRastreamento

    console.log('Resumo do frete:')
    console.log(`Taxa de rastreamento: R$ ${custoRastreamento.toFixed(2)}`)
    console.log(`Valor do frete pelas peças: R$ ${custoPecas.toFixed(2)}`)
    console.log(`Valor do frete por quilômetro: R$ ${custoPorKm.toFixed(2)}`)
    console.log(`Total do frete: R$ ${custoTotal.toFixed(2)}`)

    continuar = rl.keyInYN('Deseja calcular outro pedido?')
  }
}

calcularFrete()
