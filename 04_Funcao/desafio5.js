/*
Desafio 5: Processamento Complexo de Dados

Dado o array abaixo, você deve:

1. Extrair todos os números de cada elemento (se houver mais de um número, some-os)
2. Aplicar a fórmula f(a) para cada número extraído:
   f(a) = (√numeroDaRaiz + a) / 2
   onde "a" é o número extraído

3. A cada cálculo, adicione 10.2 ao numeroDaRaiz (começa em 200)

4. Aplicar o resultado de f(a) na fórmula final:
   g(r) = (2 * r) * 3 + 10
   onde "r" é o resultado de f(a)

5. Calcular a média de todos os resultados de g(r)

Exemplo de extração:
- "a24" -> número extraído: 24
- "zz-15k" -> número extraído: 15
- "n23abc47" -> números extraídos: 23 + 47 = 70

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

Função auxiliar para calcular média:
function media(arrayDeNumeros) {
    let soma = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        soma += arrayDeNumeros[i];
    }
    return soma / arrayDeNumeros.length;
}

Agora é com você!
*/
