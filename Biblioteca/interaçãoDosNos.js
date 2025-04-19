const fs = require('fs');
const path = require('path');
const { DOMParser } = require('xmldom');

let xmlPath =  path.resolve("C:/Users/brenn/Documents/Gerenciamento de Dados Para Web/untitled/js/biblioteca.xml");
let xmlString = fs.readFileSync(xmlPath,'utf-8');

//console.log(xmlString);


const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

const elementoRoot = xmlDoc.documentElement;

for(let i = 0; i < elementoRoot.childNodes.length; i++){

  const noFilho = elementoRoot.childNodes[i];

  if(noFilho.nodeType === 1){
    console.log(noFilho.nodeName);
  }
}

