const path = require('path');
const { DOMParser,XMLSerializer } = require('xmldom');
const fs = require("fs");

let xmlPath =  path.resolve("C:/Users/brenn/Documents/Gerenciamento de Dados Para Web/Catalogo/js/catalogo.xml");
let xmlString = fs.readFileSync(xmlPath,'utf-8');

console.log(xmlString);

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const produtosRegistrados = xmlDoc.getElementsByTagName("produto");

for(let i = 0;i<produtosRegistrados.length; i++){
  const produto = produtosRegistrados[i];
  const idProduto = produto.getAttribute("id");

  if(idProduto === "A45"){
    produto.setAttribute("moeda","BRL");
    console.log("Novo atributo moeda:", produto.getAttribute("moeda"));
    break;
  }
}
const serializer = new XMLSerializer();
const xmlModificado = serializer.serializeToString(xmlDoc);

console.log(xmlModificado);
