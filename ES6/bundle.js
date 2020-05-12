"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Introdução ao ES6
function main() {
  alert("ES6 é muito legal"); //instanciando a classe Animal e pegando seus metodos

  var animal = new Animal("cachorro", "AuAu"); //chamando a função constructor

  console.log(animal.dizernome(), animal.fazerBarulho()); //usando o metodo dizernome e fazerBarulho
  //além de extender de animal o gato tem seu 3 metodo que é a caracteristica

  var gato1 = new Gato("gato", "Miau Miau", "ficar sozinho");
  console.log(gato1.dizernome(), gato1.fazerBarulho(), gato1.metodoGato());
  var cachorro = new Cachorro("cachorro", "auau", " latir");
  console.log(cachorro.dizernome(), cachorro.fazerBarulho(), cachorro.metodoCachorro());
} //CLASSE


var Animal = /*#__PURE__*/function () {
  //definindo a classe
  function Animal(name, barulho) {
    _classCallCheck(this, Animal);

    //primeira função a ser chamada quando a classe for criada
    this.nameAnimal = name; //parametro do constructor

    this.barulhoAnimal = barulho;
  }

  _createClass(Animal, [{
    key: "dizernome",
    value: function dizernome() {
      //segundo metodo da classe
      return this.nameAnimal; //retorna o nome do animal
    } //terceiro metodo da classe

  }, {
    key: "fazerBarulho",
    value: function fazerBarulho() {
      return this.barulhoAnimal; //retorna o barulho do animal
    }
  }]);

  return Animal;
}();

var Gato = /*#__PURE__*/function (_Animal) {
  _inherits(Gato, _Animal);

  var _super = _createSuper(Gato);

  //classse extende coisas de animais
  function Gato(name, barulho, caracteristica) {
    var _this;

    _classCallCheck(this, Gato);

    //a palavra-chave super serve para acessar a classe pai de uma classe
    _this = _super.call(this, name, barulho);
    _this.caracteristica = caracteristica;
    return _this;
  }

  _createClass(Gato, [{
    key: "metodoGato",
    value: function metodoGato() {
      return "gosto de " + this.caracteristica;
    }
  }]);

  return Gato;
}(Animal);

var Cachorro = /*#__PURE__*/function (_Animal2) {
  _inherits(Cachorro, _Animal2);

  var _super2 = _createSuper(Cachorro);

  //classse extende coisas de animais
  function Cachorro(name, barulho, caracteristica) {
    var _this2;

    _classCallCheck(this, Cachorro);

    //a palavra-chave super serve para acessar a classe pai de uma classe
    _this2 = _super2.call(this, name, barulho);
    _this2.caracteristica = caracteristica;
    return _this2;
  }

  _createClass(Cachorro, [{
    key: "metodoCachorro",
    value: function metodoCachorro() {
      return "gosto de " + this.caracteristica;
    }
  }]);

  return Cachorro;
}(Animal);
