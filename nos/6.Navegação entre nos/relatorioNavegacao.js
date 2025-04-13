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

        const segundoLivroDiv = document.getElementById("navegacao");
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(dadosXml, "text/xml");
        const dadosLivros = xmlDoc.getElementsByTagName("livro");

        const segundoLivroDados = dadosLivros[dadosLivros.length-2]
        const autorSegundoLivro = segundoLivroDados.getElementsByTagName("autor")[0];

        const dadosLivroElement = document.createElement("p");
            
        let Livro2 = autorSegundoLivro.parentNode;

        let tituloLivro2 = Livro2.firstChild;

        tituloLivro2 = tituloLivro2.nextSibling;
    
           
        const tituloSegundoLivro = "Título do segundo livro: " + tituloLivro2.textContent;

        dadosLivroElement.textContent = tituloSegundoLivro;
        segundoLivroDiv.appendChild(dadosLivroElement);
    