const main = document.querySelector('main');

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
                <img src="./assets/4.png" alt="Imagem ilustrativa" class="top">
                <img src="./assets/5.png" alt="Imagem ilustrativa">
                <img src="./assets/6.png" alt="Imagem ilustrativa" class="top">
                <img src="./assets/7.png" alt="Imagem ilustrativa" class="top">
                <img src="./assets/8.png" alt="Imagem ilustrativa">
                <img src="./assets/9.png" alt="Imagem ilustrativa" class="top">
            </div>
        </div>
    `);
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
}

function contacts() {
    changePage("container", `
        <h2 style="text-align:center;">Contato</h2>
        <p style="text-align:center; margin-top:20px;">
            Me envie um e-mail: 
            <a href="mailto:luanawasckuque15@gmail.com">luanawasckuque15@gmail.com</a>
        </p>
    `);
}

// Eventos
document.querySelector('.home-link').addEventListener('click', home);
document.querySelector('.about-link').addEventListener('click', about);
document.querySelector('.contacts-link').addEventListener('click', contacts);

// Página inicial
home();
