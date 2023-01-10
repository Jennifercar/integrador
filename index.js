'use strict'

const productsData = [
  {
    id: 1,
    name: "Lali",
    date: "4 de marzo",
    category: "conciertos",
    cardImg: "./img/imgProduct/Lali3DIC600.jpg",
    precio:4500,
  },
  {
    id: 2,
    name: "Camilo",
    date: "16 de marzo",
    category: "conciertos",
    cardImg: "./img/imgProduct/Camilo.jpg",
    precio:7500,
  },
  {
    id: 3,
    name: "David Guetta",
    date: "9 de febrero",
    category: "conciertos",
    cardImg: "./img/imgProduct/davidguetta.jpg",
    precio:4500,
  },
  {
    id: 4,
    name: "Alejandro Sanz",
    date: "21 de enero",
    category: "conciertos",
    cardImg: "./img/imgProduct/Sanz.jpg",
    precio:8000,
  },
  {
    id: 5,
    name: "Reik",
    date: "6 de marzo",
    category: "conciertos",
    cardImg: "./img/imgProduct/Reik.jpg",
    precio:7500,
  },
  {
    id: 6,
    name: "Connie Ballarini",
    date: "14 de febrero",
    category: "teatro",
    cardImg: "./img/imgProduct/connie.jpg",
    precio:1500,
  },
  {
    id: 7,
    name: "La Granja",
    date: "6 de marzo",
    category: "teatro",
    cardImg: "./img/imgProduct/lagranja.jpg",
    precio:1000,
  },
];

const conteinerProducts = document.querySelector('.conteinerProducts');

function renderproduct(selecProduct) {

  conteinerProducts.innerHTML = "";

  selecProduct.forEach(product => {

    const div = document.createElement("div");

    div.classList.add("product");

    div.innerHTML = `

          <img class="imgProduct" src="${product.cardImg}" alt="Reik">
          <div class="entradas">
          <h2>${product.name}</h2>
          <h3>${product.date}</h3>
          <button class="buttonAgregar" id="${product.id}">Agregar</button></div>
			    </div>`

  
        } );

}
renderproduct(productsData);
