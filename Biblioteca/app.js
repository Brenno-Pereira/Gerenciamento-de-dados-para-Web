const fs = require('fs');
const path = require('path');
const { DOMParser } = require('xmldom');

let xmlPath =  path.resolve("C:/Users/brenn/Documents/Gerenciamento de Dados Para Web/untitled/js/biblioteca.xml");
let xmlString = fs.readFileSync(xmlPath,'utf-8').trim();

console.log(xmlString);


const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString,"text/xml");
const dadosLivros = xmlDoc.getElementsByTagName("livro");

const dadosSegundoLivro = dadosLivros[dadosLivros.length-1];

let livro2 = dadosSegundoLivro.getElementsByTagName("titulo")[0];


console.log("Título do Segundo Livro: " + livro2.firstChild.nodeValue);





