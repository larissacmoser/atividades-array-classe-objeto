// 1. Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Crie uma nova lista somente com os números ímpares e usando o
// filter
// let myList: number[] = [
//   8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4,
// ];
// let newList: number[] = myList.filter((value) => {
//   return value % 2 != 0;
// });
// console.log(newList);
// 2. Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Some o valor total de todos números utilizando o reduce
// let myList2: number[] = [
//   8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4,
// ];
// let mySum: number = myList2.reduce((current, value) => {
//   return current + value;
// }, 0);
// console.log(mySum);
// 3. Crie uma classe chamada Pessoa que contém os seguintes
// atributos: nome (string) e idade (number), que receba esses valores
// pelo construtor. Depois crie uma lista de Pessoa com algumas
// idades diferentes e por fim crie uma nova lista a partir dessa lista
// inicial utilizando o filter somente com as pessoas que possuem a
// idade menor que 23.
// class Pessoa {
//   nome!: string;
//   idade!: number;
//   salario!: number;

//   constructor(nome: string, idade: number, salario: number) {
//     this.nome = nome;
//     this.idade = idade;
//     this.salario = salario;
//   }
// }
// let listaPessoa: Pessoa[] = [
//   { nome: "Larissa", idade: 18, salario: 3500 },
//   { nome: "Marcelo", idade: 29, salario: 3000 },
//   { nome: "Matheus", idade: 40, salario: 1000 },
//   { nome: "Loiva", idade: 76, salario: 450 },
// ];
// let novaListaPessoa: Pessoa[] = listaPessoa.filter((pessoa) => {
//   return pessoa.idade < 23;
// });
// console.log(novaListaPessoa);
// 4. Utilizando a lista de Pessoa criada na atividade 3, filtre somente as
// pessoas que possuem a idade menor que 30 e calcule a média das
// idades das pessoas filtradas utilizando o reduce.
// let novaListaPessoa2: Pessoa[] = listaPessoa.filter((pessoa) => {
//   return pessoa.idade < 30;
// });
// let somaIdades = novaListaPessoa2.reduce((current, valor) => {
//   return current + valor.idade;
// }, 0);
// let media = somaIdades / novaListaPessoa2.length;
// console.log(media);
// 5. Utilizando a classe Pessoa da atividade 3, adicione mais um atributo
// chamado salario (number), faça receber esse valor pelo construtor.
// Depois filtre todas as pessoas que possuem o salário menor que

// R$1027,00 e crie uma nova lista somente com o nome e a idade da
// pessoa.
// let salMenor1027: Pessoa[] = listaPessoa.filter((pessoa) => {
//   return pessoa.salario < 1027;
// });
// let novaListaSalMenor1027: object[] = salMenor1027.map((pessoa) => {
//   return {
// //     nome: pessoa.nome,
// //     idade: pessoa.idade,
// //   };
// // });
// // console.log(novaListaSalMenor1027);

// // 6. Esta atividade é para desafiar vocês. Lembram da atividade prática
// // feita com o mentor na aula anterior? Pois então, refaçam ela
// // MASSSSSSSSSS sem olhar a call. A ideia aqui é vocês fazerem a
// // atividade por conta e tentando lembrar dos recursos utilizados
// // durante o desenvolvimento da atividade. OBS: Não vamos ter como
// // verificar se vocês vão olhar a call do mentor ou não, mas
// // lembrem-se: Vocês vão estar se auto sabotando se olharem a call
// // do mentor para conseguir resolver a atividade.
// // a. Crie uma classe Aluno com os atributos Nome, Idade, Nota e
// // Status.
// // b. Crie uma lista com pelo menos 7 alunos.
// // c. Depois crie uma lista de 10 elementos que sirva de gabarito de
// // uma prova.
// // d. Percorra a lista de alunos e aleatoriamente sorteie as
// // respostas para os alunos (simulando como se o aluno
// // estivesse marcando a resposta da pergunta).
// // e. Contabilize a nota do aluno comparando a resposta que foi
// // sorteada com o gabarito da prova.
// // f. Cada acerto vale 1 ponto
// // g. Atualize o status do aluno para aprovado caso o aluno tenha
// // uma nota maior ou igual a 6 e reprovado caso a nota for
// // menor que 6.
// // h. No final mostre os alunos aprovados, reprovados, média das
// // notas, o melhor aluno (aluno com nota mais alta) e o pior
// // aluno (aluno com a nota mais baixa). A saída precisa ser
// // parecido com essa:

// // i. Dicas
// // i. As respostas do gabarito podem ser as seguintes letras:
// // A, B, C
// // ii. Para sortear as respostas dos alunos pode ser utilizado o
// // Math.random()
// // iii. Os métodos filter, map e reduce são bem úteis para
// // resolver a atividade.
// enum statusAluno {
//   aprovado = "Aprovado",
//   reprovado = "Reprovado",
// }
// class Aluno {
//   nome!: string;
//   idade!: number;
//   nota?: number;
//   status?: statusAluno.aprovado | statusAluno.reprovado;

//   constructor(nome: string, idade: number) {
//     this.nome = nome;
//     this.idade = idade;
//   }

//   atribuirNota(gabarito: string[]) {
//     let respostas = ["A", "B", "C", "D", "E"];
//     let respostasAluno = [];
//     this.nota = 0;
//     for (let i of gabarito) {
//       let resultado = Math.floor((Math.random() * 10) % 5);
//       respostasAluno.push(respostas[resultado]);
//       if (i === respostas[resultado]) {
//         this.nota += 1;
//       }
//     }

//     console.log("===== MÉDIA =====");
//     let somaNotas = listaAlunos.reduce((current, total) => {
//       return current + total.nota!;
//     }, 0);
//     let media = (somaNotas / listaAlunos.length).toFixed(2);
//     console.log(`Média: ${media}`);

//     console.log("===== MELHOR ALUNO =====");
//     let melhorAluno = listaAlunos.find((aluno) => {
//       return Math.max(aluno.nota!);
//     });
//     console.log(`Nome: ${melhorAluno?.nome} | Nota: ${melhorAluno?.nota}`);

//     console.log("===== PIOR ALUNO =====");
//     let piorAluno = listaAlunos.find((aluno) => {
//       return Math.min(aluno.nota!);
//     });
//     console.log(`Nome: ${piorAluno?.nome} | Nota: ${piorAluno?.nota}`);
//     this.atribuirStatus();
//     if (this.status === statusAluno.aprovado) {
//       console.log("======= APROVADOS =======");
//       console.log(`Aluno: ${this.nome}`);
//       console.log(`Gabarito: ${gabarito}`);
//       console.log(`Respostas do aluno: ${respostasAluno}`);
//       console.log(`Nota: ${this.nota}`);
//       console.log("=========================");
//     }
//     if (this.status === statusAluno.reprovado) {
//       console.log("======= REPROVADOS =======");
//       console.log(`Aluno: ${this.nome}`);
//       console.log(`Gabarito: ${gabarito}`);
//       console.log(`Respostas do aluno: ${respostasAluno}`);
//       console.log(`Nota: ${this.nota}`);
//       console.log("==========================");
//     }
//   }

//   atribuirStatus() {
//     this.status =
//       this.nota! >= 6 ? statusAluno.aprovado : statusAluno.reprovado;
//   }
// }
// let listaAlunos: Aluno[] = [
//   new Aluno("Larissa", 18),
//   new Aluno("Eduardo", 20),
//   new Aluno("Fernanda", 25),
//   new Aluno("Francisco", 40),
//   new Aluno("Francesca", 53),
//   new Aluno("Maria", 42),
//   new Aluno("Vinicius", 31),
// ];
// let gabarito: string[] = ["A", "A", "E", "D", "B", "C", "B", "E", "E", "D"];
// listaAlunos.map((aluno) => aluno.atribuirNota(gabarito));
