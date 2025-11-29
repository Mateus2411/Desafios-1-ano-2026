/*
Função que  extrai as informaçoes do array, acha um padrão, aplique na formula:
const dados = [
  "a24",
  "zz-15k",
  "p100x",
  "q--3",
  "m0",
  "rt250end",
  "t9nine",
  "abcd-42",
  "x200y",
  "h0012",
  "omega-7",
  "zzzz30",
  "ppp-100pp",
  "n23abc47",
  "final--55C"
];
separe cada numero das letras e caracteres especiais, aplique a formula e retorne o resultado.

formula para cada elemento do array:

let numeroDaRaiz = 200

f(a) = (raizQuadrada(numeroDaRaiz) + a) / 2
"a" é o numero extraido do elemento do array.

cada vez que o resultado de f(a) for calculado, adicione 10,2 ao numeroDaRaiz para o proximo calculo.

aplique o resultado de f(a) na
formula final:
g(r) = (2 * r) * 3 + 10​
"r" é o resultado da formula f(a).

exemplo de extração:
elemento: "a24"  -> numero extraido: 24

O valor de 'f(a)' & 'g(r)' é representativo da formula, podendo ser utilizado uma let "algumaCoisa" para se refirir ao valor.

função da media:

function media(numeroDeElementos) {
    let soma = 0;
    for (let i = 0; i < numeroDeElementos.length; i++) {
        soma += numeroDeElementos[i];
    }
    return soma / numeroDeElementos.length;
}

Agora é com você!
*/