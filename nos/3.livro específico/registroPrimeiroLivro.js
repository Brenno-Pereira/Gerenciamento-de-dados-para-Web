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

        const livroEspecificoDiv = document.getElementById("livro_especifico");
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(dadosXml, "text/xml");
        const dadosLivros = xmlDoc.getElementsByTagName("livro")[0];

       
            const dadosLivroElement = document.createElement("p");
            let idLivro = "";
            let tituloLivro = "";
            let autorLivro = "";
            let anoPublicacao = "";

          
                 idLivro = "Id do Livro: " + dadosLivros.getAttribute("id");
                 tituloLivro = "Título do livro: " + dadosLivros.getElementsByTagName("titulo")[0].textContent;
                 autorLivro = "Nome do autor: " + dadosLivros.getElementsByTagName("autor")[0].textContent;
                 anoPublicacao = "ano de Publicação: " + dadosLivros.getElementsByTagName("ano")[0].textContent;
          


            dadosLivroElement.textContent = idLivro + " | " + tituloLivro + " | " + autorLivro + " | " + anoPublicacao;
            livroEspecificoDiv.appendChild(dadosLivroElement);
    
