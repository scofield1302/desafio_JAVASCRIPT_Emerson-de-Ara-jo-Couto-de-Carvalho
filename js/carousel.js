//carousel.js

//Inicia-se com uma lista de itens vazios, que serão preenchidos com as imagens que serão exibidas no carrossel
let carouselArr = [];

/*Foi criada a class Carousel, com os atributos:
image: imagem que será exibida cada vez no carrossel
title: o título que será exibido embaixo da imagem no carrossel
link: o link que será atribuído à imagem e, quando a imagem for clicada, será acessado*/
class Carousel {
    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }
    
    /* Foi criado o método Start para iniciar o carrossel em si */
    static Start(arr) {
        /*Utiliza-se carouselArr.push para adicionar cada imagem ao final da lista carouselArr (que iniciou vazia) e depois criamos uma nova instância de carousel com new Carousel*/
        carouselArr.push(new Carousel("imagem_1.jpg","Esta é a nova Ranger Ford 2022. Verifique novidades.","lancamento.html"));
        carouselArr.push(new Carousel("imagem_2.jpg","Ford a nossa história","#"));
        carouselArr.push(new Carousel("imagem_3.jpg","Nova Ford Bronco Sport 2022","lancamento.html"));

        /* Apenas para melhor tratamento e possível utilização de outros usuários no futuro, foi adicionada uma condicional para verificar se a lista de imagems é maior que zero */
        if (arr && arr.length > 0) {
            /* Caso a condicional seja positiva, o método inicia com sequence = 0, pois ainda não foi chamada nenhuma imagem, definimos o tamanho da lista (a quantidade de itens) = ao tamanho da lista em si e chamamos o método next, que irá exibir a imagem e depois fazer a exibição das próiximas imagens da lista de imagens*/
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._items = arr;
            Carousel.Next(); 
            /* Após exibir cada imagem, definimos um intervalo de 2000 ms (2s) para chamar a próxima imagem*/
            Carousel._interval = setInterval(Carousel.Next, 2000);
        } else {
            /* Caso a primeira condicional que verifica a quantidade de itens no array da lista de imagens não seja atendida, ou seja, não há imagens na lista, exibe um erro */
            console.error("Carousel precisa de um array de imagens válido.");
        }
    }

    /*Foi criado o método next para ser acessado dentro do método start. Este método itera as imagens no carrossel */
    static Next() {
            /*Definimos a variável item como os itens do carrossel, com relação à sequência atual */
            let item = Carousel._items[Carousel._sequence];
            /*Pegamos o item no HTML de acordo com a div criada com id = 'carousel' e exibimos a imagem e título correspondentes e atribuímos uma tag âncora com link da imagem atual do carrosel.*/
            document.getElementById("carousel").innerHTML = `<a href="${item.link}"><img src="./assets/${item.image}" alt="${item.title}" /></a>`;
            document.getElementById("carousel-title").innerText = item.title;
            /*Definimos a sequência (ou seja, a próxima imagem que será exibida) como a sequência atual + 1 e utilizamos o % Carousel._size para que, ao final da lista, pule para a primeira imagem, ou seja, fique em loop. Também poderia utilizar o if para verificar se a sequência atual = carrousel._lenght, se sim, sequence = 0. */ 
            Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    }
}
