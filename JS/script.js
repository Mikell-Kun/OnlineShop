const openShopping = document.querySelector('.shopping');
const closeShooping = document.querySelector('.closeShopping');
const list = document.querySelector('.list');
const listCard = document.querySelector('.listCard');
const body = document.querySelector('body');
const total = document.querySelector('.total');
const quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShooping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

const products = [
    { id: 1, name: "20th Aniversary Sonic the hedgehog Figure Collection", image:"figura-sonic-20-aniversario.JPG", price: 200},
    { id: 2, name: "30th Aniversary Sonic the hedgehog Figure Collection", image:"figuraAniversario30sonic.JPG", price: 200},
    { id: 3, name: "Sonic Adventure 2 Figure Collection", image:"sonicAdventure2figura.JPG", price: 100},
    { id: 4, name: "Sonic Adventure Figure Collection edition 23", image:"Figura-Sonic-the-Hedgehog-Collector-Edition-Sonic-Adventure-23cm-frikibase.jpg", price: 100},
    { id: 5, name: "Set Sonic Classic figures", image:"setSonicFiguritas.webp", price: 50},
    { id: 6, name: "SquishSmallow's Sonic the hedgehog", image:"D_NQ_NP_774982-CBT54878238025_042023-O.webp", price: 20},
    { id: 7, name: "SquishSmallow's Miles Tails Power", image:"D_NQ_NP_713650-CBT54878238027_042023-O.webp", price: 20},
    { id: 8, name: "SquishSmallow's Knuckles the equidna", image:"D_NQ_NP_684398-CBT54878238031_042023-O.webp", price: 20},
    { id: 9, name: "SquishSmallow's Shadow the hedgehog", image:"D_NQ_NP_817828-CBT54878238029_042023-O.webp", price: 20},
    { id: 10, name: "Sonic Movie Collection", image:"coleccionSonicpeliculas.jpg", price: 50},
    { id: 11, name: "30th Aniversary Sonic History", image:"enciclopediaSonic.jpg", price: 500},
    { id: 12, name: "Sega Genesis", image:"Sega-Genesis-Mk2-6button.jpg", price: 150},
    { id: 13, name: "Sonic the hedgehog Sega Genesis", image:"sonic1.jpg", price: 30},
    { id: 14, name: "Sonic the hedgehog 2 Sega Genesis", image:"sonic2.jpg", price: 30},
    { id: 15, name: "Sonic the hedgehog 3 Sega Genesis", image:"sonic3.jpg", price: 30},
    { id: 16, name: "Sonic and Knuckles Sega Genesis", image:"sonicandknuckles.jpg", price: 30},
];

let listCards = [];
function initApp() {
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="../img/${value.image}"/>
        <div class ="title">${value.name}</div>
        <div class = "price">${value.price.toLocaleString()}$</div>
        <button onclick="addToCard(${key})">Add to Card</button> `;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }

    reloadCard();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src = "../img/${value.image}"></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>

            <div>
                <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
            </div>
            `
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString(); 
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}