'use strict'

const productsData = [
  {
    id: 1,
    name: "Sabina",
    date: "12 Marzo ",
    category: {
      name: "Conciertos",
      id: "Conciertos",
    },
    cardImg: "./img/imgProduct/Sabina_CTP_HOME-MOVISTAR-ARENA.jpg",
    precio: 5000,
  },
  {
    id: 2,
    name: "Camilo",
    date: "16 de marzo",
    category: {
      name: "Conciertos",
      id: "Conciertos",
    },
    cardImg: "./img/imgProduct/Camilo.jpg",
    precio: 7500,
  },
  {
    id: 3,
    name: "David Guetta",
    date: "9 de febrero",
    category: {
      name: "Conciertos",
      id: "Conciertos",
    },
    cardImg: "./img/imgProduct/davidguetta.jpg",
    precio: 4500,
  },
  {
    id: 4,
    name: "Alejandro Sanz",
    date: "21 de enero",
    category: {
      name: "Conciertos",
      id: "Conciertos",
    },
    cardImg: "./img/imgProduct/Sanz.jpg",
    precio: 8000,
  },
  {
    id: 5,
    name: "Reik",
    date: "6 de marzo",
    category: {
      name: "Conciertos",
      id: "Conciertos",
    },
    cardImg: "./img/imgProduct/Reik.jpg",
    precio: 7500,
  },
  {
    id: 6,
    name: "Connie Ballarini",
    date: "14 de febrero",
    category: {
      name: "Teatro",
      id: "Teatro",
    },
    cardImg: "./img/imgProduct/connie.jpg",
    precio: 3000,
  },
  {
    id: 7,
    name: "La Granja",
    date: "4 Marzo",
    category: {
      name: "Teatro",
      id: "Teatro",
    },
    cardImg: "./img/imgProduct/lagranja.jpg",
    precio: 1000,
  },
  {
    id: 8,
    name: "Alejandro Fernandez",
    date: "6 de marzo",
    category: {
      name: "Conciertos",
      id: "Conciertos",
    },
    cardImg: "./img/imgProduct/385X250-2.jpg",
    precio: 6000,
  },
  {
    id: 9,
    name: "Lali",
    date: "4 de marzo",
    category: {
      name: "Conciertos",
      id: "Conciertos",
    },
    cardImg: "./img/imgProduct/Lali3DIC600.jpg",
    precio: 4500,
  },

  {
    id: 10,
    name: "Los Fabulosos Cadillacs",
    date: "26 Mayo",
    category: {
      name: "Conciertos",
      id: "Conciertos",
    },
    cardImg: "./img/imgProduct/LFC.385x250-1.jpg",
    precio: 4000,
  },
  {
    id: 11,
    name: "Mi madre mi novia y yo",
    date: "22 de enero",
    category: {
      name: "Teatro",
      id: "Teatro",
    },
    cardImg: "./img/imgProduct/mi-madre-mi-novia-y-yo.jpg",
    precio: 2000,
  },
  {
    id: 12,
    name: "Convivencia obligada",
    date: "26 de Marzo",
    category: {
      name: "Teatro",
      id: "Teatro",
    },
    cardImg: "./img/imgProduct/convivencia-obligada.jpg",
    precio: 3000,
  },
  {
    id: 13,
    name: "El divorcio",
    date: "9 de febrero",
    category: {
      name: "Teatro",
      id: "Teatro",
    },
    cardImg: "./img/imgProduct/el-divorcio.jpg",
    precio: 3000,
  },
  {
    id: 14,
    name: "Parque lezama",
    date: "19 de febrero",
    category: {
      name: "Teatro",
      id: "Teatro",
    },
    cardImg: "./img/imgProduct/parque-lezama.jpg",
    precio: 2000,
  },

  {
    id: 15,
    name: "Male Guinzburg",
    date: "15 de marzo",
    category: {
      name: "Teatro",
      id: "Teatro",
    },
    cardImg: "./img/imgProduct/male-guinzburg---unipersonal.jpg",
    precio: 3000,
  },
];

const conteinerProduct = document.querySelector('.conteinerProduct');
const buttonCategory = document.querySelectorAll('.buttonCategory');
const tituloEvento = document.querySelector('.tituloEvento');
let buttonAdd = document.querySelectorAll(".buttonAdd");
const carritoDeCompras = document.querySelector('.carritoDeCompras');
const cartContenedor = document.querySelector('.cartContenedor');



const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

let carrito =[];
//rederizaso
function renderproduct(selecProduct) {

  conteinerProduct.innerHTML = "";

  selecProduct.forEach(product => {

    const div = document.createElement("div");

    div.classList.add("product");

    div.innerHTML = `

          <img class="imgProduct" src="${product.cardImg}" alt="${product.name}">
          <div class="entradas">
          <h2>${product.name}</h2>
          <h3>${product.date}</h3>
          <h3 class="precio">Precio: ${product.precio}</h3>
			    </div>`

    conteinerProduct.append(div);

    const comprar = document.createElement("button");
    comprar.innerText ="comprar";
    comprar.className="buttonAdd"

    div.append(comprar);

    comprar.addEventListener("click",() =>{
         carrito.push({
         id: product.id,
         cardImg: product.cardImg,
         name: product.name,
         precio: product.precio,
      });
    console.log(carrito);
      })
      });
  
}
  renderproduct(productsData);

 

//filter
buttonCategory.forEach(button => {

  button.addEventListener("click", (e) => {

    buttonCategory.forEach(button => button.classList.remove("active"));
    e.target.classList.add("active");

    if (e.target.id != "todos") {
      const productsButton = productsData.filter(product => product.category.id === e.target.id);
      renderproduct(productsButton);
    }
    else {
      renderproduct(productsData);
    }

  })
});


