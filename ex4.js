const rl = require('readline-sync');

function calcularFolhaPagamento() {
    let continuar = true;
    while (continuar) {
        let codigo = rl.question("Digite o código do funcionário: ");
        let horasTrabalhadas = parseFloat(rl.question("Digite o número de horas trabalhadas: "));
        let salarioMinimo = parseFloat(rl.question("Digite o valor do salário mínimo: "));

        let turno;
        while (true) {
            turno = rl.question("Digite o turno de trabalho (M - Matutino, V - Vespertino, N - Noturno): ").toUpperCase();
            if (["M", "V", "N"].includes(turno)) break;
            console.log("Turno inválido. Tente novamente.");
        }

        let categoria;
        while (true) {
            categoria = rl.question("Digite a categoria do funcionário (F - Funcionário, G - Gerente): ").toUpperCase();
            if (["F", "G"].includes(categoria)) break;
            console.log("Categoria inválida. Tente novamente.");
        }

        let valorHora;
        switch (categoria) {
            case "F":
                if (turno === "M") valorHora = salarioMinimo * 0.10;
                else if (turno === "V") valorHora = salarioMinimo * 0.15;
                else if (turno === "N") valorHora = salarioMinimo * 0.20;
                break;
            case "G":
                if (turno === "M") valorHora = salarioMinimo * 0.30;
                else if (turno === "V") valorHora = salarioMinimo * 0.35;
                else if (turno === "N") valorHora = salarioMinimo * 0.40;
                break;
        }

        let salarioInicial = valorHora * horasTrabalhadas;
        let auxilioAlimentacao;
        if (salarioInicial <= 800) auxilioAlimentacao = salarioInicial * 0.25;
        else if (salarioInicial <= 1200) auxilioAlimentacao = salarioInicial * 0.20;
        else auxilioAlimentacao = salarioInicial * 0.15;

        let salarioFinal = salarioInicial + auxilioAlimentacao;

        console.log("Resumo da folha de pagamento:");
        console.log(`Código do funcionário: ${codigo}`);
        console.log(`Número de horas trabalhadas: ${horasTrabalhadas}`);
        console.log(`Turno de trabalho: ${turno}`);
        console.log(`Categoria do funcionário: ${categoria}`);
        console.log(`Valor da hora trabalhada: R$ ${valorHora.toFixed(2)}`);
        console.log(`Salário inicial: R$ ${salarioInicial.toFixed(2)}`);
        console.log(`Auxílio-alimentação: R$ ${auxilioAlimentacao.toFixed(2)}`);
        console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`);

        continuar = rl.keyInYN("Deseja cadastrar outro funcionário?");
    }
}

calcularFolhaPagamento();
