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



// ---------


// Liste 5 objetos nativos
Object
String
Array
Function
Number

// Liste 5 objetos do browser
window
history
Document
HTMLCollection
NodeList



//----------


// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const numeroLimpo = +item.valor.replace('R$ ', '');
  if (item.descricao.slice(0, 4) === 'Rece') {
    recebimentoTotal += numeroLimpo;
  }
});
console.log(taxaToal)
console.log(recebimentoTotal)


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';')
console.log(arrayTransportes)

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a');

console.log(html)


// Retorne o último caracter da frase
const frase2 = 'Melhor do ano!';

console.log(frase[frase.length - 1])
//ou
console.log(frase.slice(-1))

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes2.forEach((item) => {
  item = item.toLowerCase();
  item = item.trim();
  item = item.slice(0, 4);

  if (item === 'taxa')
    taxasTotal++
})

console.log(taxasTotal)


//----------


// Retorne um número aleatório
// entre 1050 e 2000

const numeroAleatorio = Math.floor(Math.random() * (1050 - 2000 + 1)) + 2000;


// Retorne o maior número da lista abaixo
const numeross = '4, 5, 20, 8, 9';
const arrayNumeross = numeross.split(', ');


const numeroMax = Math.max(...arrayNumeross);


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
  'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limparPreco(preco);
})

console.log(soma.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));

limparPreco(listaPrecos[1]);


//-----------


const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array


const primeiroValor = comidas.shift();
const ultimoValor = comidas.pop();

comidas.push('Arroz');

comidas.unshift('Peixe')

console.log(primeiroValor)
console.log(ultimoValor)
console.log(comidas)

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort();
estudantes.reverse();

console.log(estudantes);
console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))



let html2 = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html2 = html2.split('section').join('ul').split('div');
console.log(html2)


const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
const carrosCopia = carros.slice();

carros.pop();



//------------


// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horsas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})

console.log(objetosCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter(n => n > 100);

console.log(maioresQue100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const possuiBaixo = instrumentos.some((item) => {
  return item === 'Baixo';
})

console.log(possuiBaixo)


// *** Retorne o valor total das compras ***
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  },
  {
    item: 'Arroz',
    preco: 'R$ 5,50'
  }
]


const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$ ', '').replace(', ', '.');
  return acumulador + precoLimpo;
}, 0)

console.log(valorTotal);


//-------------

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
}

console.log(criarElemento('li', 'azul', 'Esse é o conteudo'));



// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

const cursosJS = h1Titulo('Curso de JavaScript');
const cursoOutro = h1Titulo('Curso de Outra Coisa');


//---------


// Crie uma função que verifique
// corretamente o tipo de dado

function verificarDado(dado) {
  return Object.prototype.toString.call(dado);
}

console.log(verificarDado('String'));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  }
});

console.log(quadrado);



// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
