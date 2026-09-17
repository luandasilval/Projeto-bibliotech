
const livros = document.querySelectorAll(".livro");

const botaoAnterior = document.getElementById("pagina-anterior");
const botaoProxima = document.getElementById("proxima-pagina");
const numeroPagina = document.querySelector(".pagina-atual");
const quantidadeLivros = document.querySelector(".quantidade-livros");

//*CONFIG DA PAGINAÇÃO

//define quantos livros serão mostrados em cada pagina 
const livrosPorPagina = 4;


// guarda qual pagina está sendo exibida começando na pagina 1
let paginaAtual = 1;

//*CALCULANDO O TOTAL DE PAGINAS 
//divide aa qtd totsl de livros pela quantidade de livros por pagina 
//Math.ceil arredonda resultado para cima
//ex. 10 livros / 4 por pagina, 2.5 para cada
//Math.ceil() = 2.5 arredondado para cima -> 3 paginas 

const totalPaginas = Math.ceil(livros.length / livrosPorPagina);

//*FUNÇÃO RESPONSÁVEL POR MOSTRAR A PAGINA (ATUALIZA OS ELEMENTOS)

function mostrarPagina() {
    //descobre o indice do primeiro livro que deve aparecer 
    const inicio = (paginaAtual - 1) * livrosPorPagina;
    //Descobre até onde os livros devem ser exibidos

    //pagina 1 tem o inicio 0 + 4 = 4, 4 + 4 = 8
    const fim = inicio + livrosPorPagina;

    //percorre toda a lista de livros encontrados no html
    //livro representa o elemento atual
    //indice representa a posição deste livro na lista 


    livros.forEach((livro, posicao) => {

        //verifica se o indice/ posicao do livro esta dentro do intervalo da pagina atual
        if (posicao >= inicio && posicao < fim) {
            //se estiver, mostra o livro
            livro.style.display = "grid";
        }
        else {
            //se nao estiver, esconde o livro
            livro.style.display = "none";
        }
    })

    //atualiza no html o numero da pagina atual 
    numeroPagina.textContent = paginaAtual;

    //inicialmente, consideramos o "fim" como a posicão do ultimo livro mostrado
    let ultimoLivro = fim;

    //se o valor ultrapassar a quantidade real de livros, usamos a qtd total
    if (ultimoLivro > livros.length) {
        ultimoLivro = livros.length;
    }

    //atualiza o texto que informa qtos livros estão sendo mostrados
    quantidadeLivros.textContent = `Mostrando ${ultimoLivro} de ${livros.length} livros`
}

//*evento de clique no botao de proxima pagina
botaoProxima.addEventListener("click", () => {

    //so permite avançar se ainda existir uma proxima pagina
    if (paginaAtual < totalPaginas) {
        //avança uma pagina
        paginaAtual++;

        //atualiza os liros exibidos na tela
        mostrarPagina();
    }
})

//*Evento de clique no botao de pagina anterior
botaoAnterior.addEventListener("click", () => {
    //so permite voltar se nao estivermos naa primeira pagina
    if (paginaAtual > 1) {
        //voltamos uma pagina
        paginaAtual--;

        //atualiza os livros exibidos na tela
        mostrarPagina();
    }
})

//quando a pagina carregar precisamos executar a funçao de mostrar pagina uma vez para esconder os livros que nao pertencem a primeira pagina
mostrarPagina();