let valorAtual = '';
let operador = '';
let valorAnterior = '';

function adicionarNumero(num) {
    valorAtual += num;
    document.getElementById('resultado').value = valorAtual;
}

function operacao(op) {
    valorAnterior = valorAtual;
    operador = op;
    valorAtual = '';
    document.getElementById('resultado').value = '';
}

function calcular() {
    let resultado;
    let num1 = parseFloat(valorAnterior);
    let num2 = parseFloat(valorAtual);

    if (operador === '+') {
        resultado = num1 + num2;
    } else if (operador === '-') {
        resultado = num1 - num2;
    } else if (operador === '*') {
        resultado = num1 * num2;
    } else if (operador === '/') {
        resultado = num1 / num2;
    }

    document.getElementById('resultado').value = resultado;
    valorAtual = resultado;
}

function limpar() {
    valorAtual = '';
    valorAnterior = '';
    operador = '';
    document.getElementById('resultado').value = '';
}