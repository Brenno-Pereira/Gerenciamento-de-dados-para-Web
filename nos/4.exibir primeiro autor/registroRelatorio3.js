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

        const livroEspecificoDiv = document.getElementById("primeiro_autor");
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(dadosXml, "text/xml");
        const dadosPrimeiroLivro = xmlDoc.getElementsByTagName("livro")[0];

        const dadosLivroElement = document.createElement("p");
            
        let livroTitulo = dadosPrimeiroLivro.firstChild;
          
       
        livroTitulo = livroTitulo.nextSibling;
          

        let autorLivro = livroTitulo.nextSibling;
          
          
        autorLivro = autorLivro.nextSibling;
        
       
        const nomeAutor = "Autor do livro: " + autorLivro.firstChild.nodeValue;

        dadosLivroElement.textContent = nomeAutor;
        livroEspecificoDiv.appendChild(dadosLivroElement);
    
