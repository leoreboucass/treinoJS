//EXERCÍCIOS (DO BÁSICO AO MAIS COMPELXO ;D)



// Declarar uma variável com o seu nome

var nome = "Leo";

// Declarar uma variável com a sua idade

var idade = 19;

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var macarrao

// Atribuir valor a sua comida favorita
var comidaFavorita = macarrao

// Declarar 5 variáveis diferentes sem valores

var nome
var tamanho
var idade
var sobrenome
var seila

// Declare uma variável contendo uma string
var palavra = 'algumapalavra'

// Declare uma variável contendo um número dentro de uma string
var numeroString = '19'

// Declare uma variável com a sua idade
var idade = 19

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var nome = 'Leonardo'
var sobrenome = 'Rebouças'

var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

// Coloque a seguinte frase em uma variável: It's time

var frase = "It's time"
console.log(frase);

// Verifique o tipo da variável que contém o seu nome

var nome = 'Leo'
typeof nome;


// Qual o resultado da seguinte expressão? (Resolvido)
var total = 10 + 5 * 2 / 2 + 20;
console.log(total) //35


// Crie duas expressões que retornem NaN

var peso = '80kg'
var divisao = peso / 2;
console.log(peso, divisao)



// Como dividir o peso por 2?
var numero = +'80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2;
console.log(pesoPorDois)


// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 19
var idadeParente = 30

if (minhaIdade > idadeParente) {
  console.log('é maior')
} else if (minhaIdade === idadeParente) {
  console.log('mesma idade')
} else {
  console.log('é menor')
}


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;


console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);



// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

//FALSO

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

//CÃO


// Crie uma função para verificar se um valor é Truthy

function isTruthy(dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  return lado * 4;
}


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function meuNome(nome, sobrenome) {
  return nome + ' ' + sobrenome;
}

// Crie uma função que verifica se um número é par

function isPar(numeroai) {
  if (numeroai % 2 === 0) {
    console.log('é par')
  } else {
    console.log('é impar')
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipode(variavel) {
  return typeof variavel;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function () {
  console.log('Leonardo Reboucas')
});



// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {

  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var dados = {
  nome: 'Leonardo',
  segundoNome: 'Rebouças',
}


// Crie um método no objeto anterior, que mostre o seu nome completo

dados.NomeInteiro = function () {
  return this.nome + ' ' + this.segundoNome
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raça: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'auauau';
    } else {
      return 'Não faz nada';
    }
  }
}




// nomeie 3 propriedades ou métodos de strings

//fixed
//length
//slice

// nomeie 5 propriedades ou métodos de elementos do DOM

//addEventListener
//appendChild
//id
//innerHtml
//outerHtml

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var ganhou = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i = 0; i < ganhou.length; i++) {
  console.log('O brasil foi campeão nos anos ' + ganhou[i]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[4];

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll 

var scroll = 1000;
scroll += 500
console.log(scroll);



//addEventListener('scroll', function() {
//  console.log(this.scroll + 500)
//})




// Atribua true para a variável darCredito,  
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

if (possuiCarro === true && possuiCasa === true) {
  console.log('dar crédito');
} else {
  console.log('não dar crédito')
}

// Por qual motivo o código abaixo retorna com erros? 
var carro = {
  cor: 'preto',
  marca: 'Fiat',
  portas: 4,
}
console.log(carro);

// Como corrigir o erro abaixo? v
let dois = 2

function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}


// O que fazer para total retornar 500? 
var numero = 0;

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total500 = 50 * numero;
console.log(total);

//------


// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const primeiroAtivo = document.querySelector('Ativo');

// Retorne a linguagem do navegador
const linguagemNavegador = window.navigator.language;
console.log(linguagemNavegador);

// Retorne a largura da janela
const larguraJanela = window.innerWidth

// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll('img')
console.log(todasImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgEspecifico = document.querySelectorAll('img[src^="img/imagem"]')

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('href^=#')

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);



//---------



// Mostre no console cada parágrado do site
const paragraffos = document.querySelectorAll('p');
console.log(paragraffos);

// Mostre o texto dos parágrafos no console
paragraffos.forEach((texto) => {
  console.log(texto.innerText)
});


// Como corrigir os erros abaixo: corrigido :)
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let v = 0;
imgs.forEach(() => {
  console.log(v++);
});

imgs.forEach(() => v++);



//--------


// Adicione a classe ativo a todos os itens do menu
const itemAtivo = document.querySelectorAll('.menu')
itemAtivo.forEach((item) => {
  item.classList.add('ativo')
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itemAtivo.forEach((item) => {
  item.classList.remove('ativo')
});

itemAtivo[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const allImgs = document.querySelectorAll('img');

allImgs.forEach((img) => {
  const possuiAlt = img.hasAttribute('alt');
  console.log(img, possuiAlt);
});


// Modifique o href do link externo no menu
const linkExt = document.querySelector('a[href^="http"]');

linkExt.setAttribute('href', 'https://google.com/');
console.log(linkExt);



//----


// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImg = document.querySelectorAll('img');
const resposta = firstImg.offsetTop;
console.log(resposta);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const larguraImgs = document.querySelectorAll('img')
  larguraImgs.forEach((imagenss) => {
    soma += imagenss.offsetWidth
  })
};

window.onload = function () {
  somaImagens()
}


// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const linksRecomendados = document.querySelectorAll('a')

linksRecomendados.forEach((item) => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui Acessibilidade.')
  } else {
    console.log('Não possui boa Acessibilidade')
  }
});



// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const larguraBrowser = window.matchMedia('(max-width: 720px)').matches;
if (larguraBrowser) {
  const menu = document.querySelector('menu')
  larguraBrowser.classList.add('menu-mobile');
}



//-------



// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInt = document.querySelectorAll('a[href^=#]')

function handleLink(event) {
  event.preventDefault();
  linkInt.forEach((link) => {
    link.classList.remove('ativo')
  })
  event.currentTarget.classList.add('ativo')
}

linkInt.forEach((link) => {
  link.addEventListener('click', handleLink)
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *')

function mostrarElemento(evento) {
  console.log(evento.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', mostrarElemento)
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

const todosElement = document.querySelectorAll('body *')

function removerElemento(evento) {
  evento.classList.remove()
}

todosElement.forEach((elemento) => {
  elemento.addEventListener('click', removerElemento)
});


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleClickT(evento) {
  if (evento.key === 't') {
    document.documentElement.classList.toggle('.textomaior')
  }
}

window.addEventListener('keydown', handleClickT)



//--------


// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)
copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq

const faq = document.querySelectorAll('.faq')
const primeiroDT = faq.querySelector('dt')


// Selecione o DD referente ao primeiro DT

const proximoDD = primeiroDT.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector('.animais');

faq.innerHTML = animais


//-------


// Transforme o objeto abaixo em uma Constructor Function
//const pessoa = {
// nome: 'Nome pessoa',
// idade: 0,
// andar() {
//   console.log(this.nome + ' andou');
//  }
//}

function pessoa() {
  this.nome = 'Nome pessoa',
    this.idade = 0;
  this.andar = function () {
    console.log(this.nome + ' andou')
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const Joao = new pessoa('João', 20)
const Maria = new pessoa('Maria', 25)
const Bruno = new pessoa('Bruno', 15)

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos


function Dom(seletor) {
  const elementList = document.querySelectorAll
  this.element = elementList

  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function (classe) {
    this.elementList.forEach((element) => {
      element.classList.remove(classe)
    })
  }
}
this.removeClass = function (evento) {
  evento.classList.remove()
}



