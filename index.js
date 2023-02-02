'use strict'
const conteinerProduct = document.querySelector('.conteinerProduct');
const buttonCategory = document.querySelectorAll('.buttonCategory');
const carritoBoton = document.querySelector('.carritoBoton');
const cartContenedor = document.querySelector('.cartContenedor');
const modalContainer = document.getElementById("modal-container")


const saveLocalStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

let carrito =JSON.parse(localStorage.getItem("carrito")) || [];

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

  //carrito

    const comprar = document.createElement("button");
    comprar.innerText ="comprar";
    comprar.className="buttonAdd"

    div.append(comprar);

    comprar.addEventListener("click",() =>{

    const repetido = carrito.some((productoRepetido) => productoRepetido.id === product.id);
      if( repetido){
        carrito.map((prod) => {
          if ( prod.id === product.id){
            prod.quantity++;
          }
        });

      }else {
       carrito.push({
         id: product.id,
         cardImg: product.cardImg,
         name: product.name,
         date:product.date,
         precio: product.precio,
         quantity: product.quantity,
      });
    };
    console.log(carrito);

    saveLocalStorage();
      })

      });
  
}
  renderproduct(productsData);

  const mostrarCart = () =>{
    modalContainer.innerHTML="";
    modalContainer.style.display="flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h2 class= "modal-header-title"> Tu ticket aqui:</h2>`;

    modalContainer.append(modalHeader);

    const modalButton = document.createElement("a");
    modalButton.className = "modal-header-button";
    modalButton.innerHTML = `<a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi-x" viewBox="0 0 20 20">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></a>`;

    modalButton.addEventListener("click",() => {
      modalContainer.style.display="none";
    })

    modalHeader.append(modalButton);

   carrito.forEach((product)=>{
      let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
    <div class="modal-content2">
    <img class="imgProduct" src="${product.cardImg}" alt="${product.name}">
    <h2>${product.name}</h2>
          <h3>${product.date}</h3>
          <h3 class="precio">Precio: ${product.precio}$</h3>
          <span class="restar"> - </span>
          <h3> ${product.quantity}</h3>
          <span class="sumar"> + </span>
          </div>
     `;

     modalContainer.append(carritoContent);

     let restar = carritoContent.querySelector(".restar");
     restar.addEventListener("click", () => {
      if(product.quantity !== 1) {
      product.quantity--};
      saveLocalStorage();
      mostrarCart();
     });

     let sumar = carritoContent.querySelector(".sumar");
     sumar.addEventListener("click", () => {
      if(product.quantity !== 1) {
      product.quantity++};
      saveLocalStorage();
      mostrarCart();
     });

     let eliminarProducto= document.createElement("a");
     eliminarProducto.className = "eliminarProducto";
     eliminarProducto.innerHTML=`
     <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bitrash3" viewBox="0 0 16 16">
	<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
  </svg></a>
     `
     carritoContent.append(eliminarProducto);
    
     eliminarProducto.addEventListener("click",eliminarProductoDelCarrito)

    });

  const total = carrito.reduce((acc , cur) => acc + cur.precio * cur.quantity,0);

  const totalBuying = document.createElement("div")
  totalBuying.className="total-content"
  totalBuying.innerHTML= `Total a pagar: ${total}$`;
  modalContainer.append(totalBuying);
};

carritoBoton.addEventListener("click",mostrarCart);
 


const eliminarProductoDelCarrito = () => {
const founId =carrito.find((elemento) => elemento.id);
carrito= carrito.filter((carritoId) => {
  return carritoId !== founId;
});

mostrarCart();

 };



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


