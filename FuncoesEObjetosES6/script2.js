script = () => {
  console.log(soma(1, 2));
  console.log(soma(1));
  console.log(soma());

  //DESESTRUTURAÇÃO DE OBJETOS
  const animal = {
    nome: "bimo",
    raca: "pitbull",
    dono: {
      cidade: "rj",
      idade: 25,
    },
  };

  /*const nome = animal.nome;
  const raca = animal.raca;
  const cidade = animal.dono.cidade;
*/
  //exemplo complexo
  const {
    nome,
    raca,
    dono: { cidade },
  } = animal;
  console.log(nome, raca, cidade);
  //exemplo simplificado
  retornaNome(animal); //pegando apenas o objeto animal pois a funcao retornaNome já pega os dados que queremos
};
//FUNÇÕES COM VALORES PADRÕES
soma = (x = 2, y = 3) => {
  //se nao passar nenhum valor sera usado 2 e 3
  return x + y;
};
//funcao para exibir os dados
retornaNome = ({ nome, raca, dono: { cidade } }) => {
  console.log(nome, raca, cidade);
};
