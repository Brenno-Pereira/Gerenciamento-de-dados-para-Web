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

        const ultimoAnoDiv = document.getElementById("ultimo_ano");
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(dadosXml, "text/xml");
        const dadosLivros = xmlDoc.getElementsByTagName("livro");
        const ultimoLivroDados = dadosLivros[dadosLivros.length-1]

        const dadosLivroElement = document.createElement("p");
            
        let livroAno = ultimoLivroDados.lastChild;

       
        livroAno = livroAno.previousSibling;
    
           
        const anoPublicacaoUltimoLivro = "Ano de publicação: " + livroAno.firstChild.nodeValue;

        dadosLivroElement.textContent = anoPublicacaoUltimoLivro;
        ultimoAnoDiv.appendChild(dadosLivroElement);
    
