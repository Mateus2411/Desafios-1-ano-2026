/* 
🟦 GRANDE DESAFIO 1: Sistema de Gerenciamento Escolar

Crie um sistema que gerencie alunos de uma escola, utilizando TODOS os conceitos:
decisões, arrays, repetição, funções e objetos.

DADOS FORNECIDOS (use este array como base):
*/

const alunos = [
    { nome: "Ana Silva", idade: 15, turma: "9A", notas: [8.5, 7.0, 9.0, 8.0], frequencia: 85 },
    { nome: "Bruno Costa", idade: 14, turma: "8B", notas: [6.0, 5.5, 6.5, 7.0], frequencia: 78 },
    { nome: "Carla Santos", idade: 15, turma: "9A", notas: [9.5, 10, 9.0, 9.5], frequencia: 95 },
    { nome: "Daniel Oliveira", idade: 14, turma: "8A", notas: [4.0, 5.0, 4.5, 3.5], frequencia: 65 },
    { nome: "Eduarda Lima", idade: 15, turma: "9B", notas: [7.5, 8.0, 7.0, 8.5], frequencia: 88 },
    { nome: "Felipe Souza", idade: 14, turma: "8B", notas: [5.0, 6.0, 5.5, 6.5], frequencia: 72 },
    { nome: "Gabriela Rocha", idade: 15, turma: "9A", notas: [10, 9.5, 10, 9.0], frequencia: 92 },
    { nome: "Henrique Alves", idade: 14, turma: "8A", notas: [6.5, 7.0, 6.0, 7.5], frequencia: 80 },
    { nome: "Isabela Martins", idade: 15, turma: "9B", notas: [8.0, 8.5, 9.0, 8.0], frequencia: 90 },
    { nome: "João Pedro", idade: 14, turma: "8B", notas: [3.5, 4.0, 4.5, 5.0], frequencia: 60 }
];

/*
FUNCIONALIDADES A IMPLEMENTAR:

1. calcularMedia(nomeAluno)
   - Retorna a média das 4 notas do aluno

2. determinarSituacao(nomeAluno)
   - Aprovado: média >= 7 E frequência >= 75%
   - Recuperação: média >= 5 e < 7 E frequência >= 75%
   - Reprovado: média < 5 OU frequência < 75%

3. buscarAluno(nome)
   - Retorna o objeto do aluno ou mensagem se não encontrado

4. listarAlunosPorTurma(turma)
   - Retorna array com todos os alunos da turma especificada

5. listarTop3Alunos()
   - Retorna os 3 alunos com maiores médias

6. relatorioGeral()
   - Lista todos os alunos com: nome, turma, média e situação

7. estatisticas()
   - Mostra: total de alunos, aprovados, em recuperação e reprovados

AGORA É COM VOCÊ! Implemente as funções acima e teste o sistema.
*/
