script3 = () => {
  //SHORT SYTAX

  const nome = "bimo";
  const raca = "pitbull";
  const idade = 3;

  const animal = {
    nome: nome,
    raca: raca,
    idade: idade,
    dono: {
      nome: "mateus",
      cidade: "sp",
    },
  };

  //usando short syntax

  const animal2 = {
    nome,
    raca,
    idade,
    dono: {
      nome: "mateus",
      cidade: "sp",
    },
  };
  console.log(animal);
  console.log(animal2);

  //interpulacao de string

  const apresentacao = "olá";
  const primeiroNome = "mateus";

  console.log(`${apresentacao} ${primeiroNome}, tudo bem?`);
};
