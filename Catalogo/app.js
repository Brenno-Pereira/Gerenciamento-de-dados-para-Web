const fs = require('fs');
const path = require('path');
const { DOMParser, XMLSerializer} = require('xmldom');

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
      const preco = produto.getElementsByTagName("preco")[0];

      preco.firstChild.nodeValue = "3.00";
      console.log("Preco do produto com ID A45: " + preco.firstChild.nodeValue);
      break;
  }
}








