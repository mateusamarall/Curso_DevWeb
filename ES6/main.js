//Introdução ao ES6
function main() {
  alert("ES6 é muito legal");
  //instanciando a classe Animal e pegando seus metodos
  var animal = new Animal("cachorro", "AuAu"); //chamando a função constructor
  console.log(animal.dizernome(), animal.fazerBarulho()); //usando o metodo dizernome e fazerBarulho
  //além de extender de animal o gato tem seu 3 metodo que é a caracteristica
  var gato1 = new Gato("gato", "Miau Miau", "ficar sozinho");
  console.log(gato1.dizernome(), gato1.fazerBarulho(), gato1.metodoGato());

  var cachorro = new Cachorro("cachorro", "auau", " latir");
  console.log(
    cachorro.dizernome(),
    cachorro.fazerBarulho(),
    cachorro.metodoCachorro()
  );
}

//CLASSE

class Animal {
  //definindo a classe
  constructor(name, barulho) {
    //primeira função a ser chamada quando a classe for criada
    this.nameAnimal = name; //parametro do constructor
    this.barulhoAnimal = barulho;
  }
  dizernome() {
    //segundo metodo da classe
    return this.nameAnimal; //retorna o nome do animal
  }
  //terceiro metodo da classe
  fazerBarulho() {
    return this.barulhoAnimal; //retorna o barulho do animal
  }
}

class Gato extends Animal {
  //classse extende coisas de animais
  constructor(name, barulho, caracteristica) {
    //a palavra-chave super serve para acessar a classe pai de uma classe
    super(name, barulho);
    this.caracteristica = caracteristica;
  }
  metodoGato() {
    return "gosto de " + this.caracteristica;
  }
}

class Cachorro extends Animal {
  //classse extende coisas de animais
  constructor(name, barulho, caracteristica) {
    //a palavra-chave super serve para acessar a classe pai de uma classe
    super(name, barulho);
    this.caracteristica = caracteristica;
  }
  metodoCachorro() {
    return "gosto de " + this.caracteristica;
  }
}
