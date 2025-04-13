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

            const autorEanoDePublicacaoDiv = document.getElementById("autores_anos");
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(dadosXml, "text/xml");
            const dadosAnoEautor = xmlDoc.getElementsByTagName("livro");

            for (let i = 0; i < dadosAnoEautor.length; i++) {
                const dadosAnoEautorElement = document.createElement("p");

                const nomeAutor = "Nome do autor: " + dadosAnoEautor[i].getElementsByTagName("autor")[0].textContent;
                const anoPublicacao = "Ano de publicação do livro: " + dadosAnoEautor[i].getElementsByTagName("ano")[0].textContent;


                dadosAnoEautorElement.textContent = nomeAutor + " | " + anoPublicacao;
                autorEanoDePublicacaoDiv.appendChild(dadosAnoEautorElement);
            }
