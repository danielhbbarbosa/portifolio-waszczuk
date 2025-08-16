const main = document.querySelector('main');
const footer = document.querySelector('footer')

console.log(footer)

// Função para trocar de página com transição
function changePage(className, content) {
    // Inicia a saída (fade-out)
    main.classList.add('fade-out');

    // Espera o fade-out terminar para trocar o conteúdo
    setTimeout(() => {
        main.className = className; // troca a classe principal (container, sobre, etc.)
        main.innerHTML = content;   // troca o HTML
        main.classList.remove('fade-out'); // inicia o fade-in
    }, 300); // mesmo tempo do transition no CSS
}

// Páginas
function home() {
    changePage("container", `
        <div class="flex">
            <div class="assets">
                <img src="./assets/1.png" alt="Imagem ilustrativa">
                <img src="./assets/2.png" alt="Imagem ilustrativa">
                <img src="./assets/3.png" alt="Imagem ilustrativa">
                <img src="./assets/4.png" alt="Imagem ilustrativa" class="around">
                <img src="./assets/5.png" alt="Imagem ilustrativa">
                <img src="./assets/6.png" alt="Imagem ilustrativa" class="around">
                <img src="./assets/7.png" alt="Imagem ilustrativa" class="around">
                <img src="./assets/8.png" alt="Imagem ilustrativa">
                <img src="./assets/9.png" alt="Imagem ilustrativa" class="around">
            </div>
        </div>
    `);

    footer.classList.add('padrao')
    footer.classList.remove('none')
}

function about() {
    changePage("sobre", `
        <img src="./assets/sobre.png" alt="Imagem ilustrativa">
        <div class="sobre-text">
            <h2 class="title-sobre">Sobre mim</h2>
            <p class="paragraph-sobre">
                Oie me chamo Luana Waszczuk, atualmente tenho 18 anos, sou Designer a um tempinho já ... amo o que faço , e pretendo seguir carreira e em muito breve abrir minha loja online como Designer.
            </p>
        </div>
    `);

    footer.classList.add('padrao')
    footer.classList.remove('none')
}

function contacts() {
    changePage("container", `
        
        <section class="contacts">
            <div class="contact">
                <img src="./assets/gmail.png">
                <h3>E-mail</h3>
            </div>

            <div class="contact">
                <img src="./assets/linkedin.png">
                <h3>Linkedin</h3>
            </div>

            <div class="contact">
                <img src="./assets/behance.png">
                <h3>Behance</h3>
            </div>
        </section>
        
        
    `);

    footer.classList.add('none')
    footer.classList.remove('padrao')
}

// Eventos
document.querySelector('.home-link').addEventListener('click', home);
document.querySelector('.about-link').addEventListener('click', about);
document.querySelector('.contacts-link').addEventListener('click', contacts);

// Página inicial
contacts();
