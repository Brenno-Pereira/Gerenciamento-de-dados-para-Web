const dadosXml= `
        <livraria>
            <livro id="1">
                <titulo>O Pequeno Príncipe</titulo>
                <autor>Antoine de Saint-Exupéry</autor>
                <ano>1943</ano>
            </livro>
                <livro id="2">
                <titulo>Dom Quixote</titulo>
                <autor>Miguel de Cervantes</autor>
                <ano>1605</ano>
            </livro>
                <livro id="3">
                <titulo>1984</titulo>
                <autor>George Orwell</autor>
                <ano>1949</ano>
            </livro>
        </livraria>
    `;

    const idsLivrosDiv = document.getElementById("ids");
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(dadosXml, "text/xml");
    const livros = xmlDoc.getElementsByTagName("livro");
    
    for (let i = 0; i < livros.length; i++) {
      const idsLivrosElement = document.createElement("p");
      idsLivrosElement.textContent = "IDs do livros registrados: " + livros[i].getAttributeNode('id').nodeValue;
      idsLivrosDiv.appendChild(idsLivrosElement);
    }