const homeLink = document.querySelector('.home-link')
const aboutLink = document.querySelector('.about-link')
const contactsLink = document.querySelector('.contacts-link')
const main = document.querySelector('main')

function home() {
    main.innerHTML = `
        <div class="flex">
        
            <div class="assets">
                <img src="./assets/1.avif" alt="Imagem ilustrativa">
                <img src="./assets/2.avif" alt="Imagem ilustrativa">
                <img src="./assets/3.avif" alt="Imagem ilustrativa">
                <img src="./assets/4.avif" alt="Imagem ilustrativa" class="top">
                <img src="./assets/5.avif" alt="Imagem ilustrativa">
                <img src="./assets/6.avif" alt="Imagem ilustrativa" class="top">
                <img src="./assets/7.avif" alt="Imagem ilustrativa" class="top">
                <img src="./assets/8.avif" alt="Imagem ilustrativa">
                <img src="./assets/9.avif" alt="Imagem ilustrativa" class="top">
            </div>

        </div>
    `
}

function about() {
    main.innerHTML = `
        <img src="./assets/sobre.png" alt="Imagem ilustrativa">

        <div class="sobre-text">

            <h2 class="title-sobre">Sobre mim</h2>
            
            <p class="paragraph-sobre">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta quos sequi commodi sit ratione optio neque unde voluptatibus quia? Possimus libero adipisci ipsum officiis itaque voluptatum sit ratione animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cupiditate id placeat neque iste quis adipisci ratione expedita.</p>
            
        </div>
    `
}

function contacts() {
    main.innerHTML = `

    `
}
