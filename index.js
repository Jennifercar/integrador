import { productsData } from "./data.js";
const products = document.querySelector(".products-container");
const productsCart = document.querySelector(".cart-container");
const total = document.querySelector(".total");
const categories = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const btnLoad = document.querySelector(".btn-load");
const buyBtn = document.querySelector(".btn-buy");
const cartBubble = document.querySelector(".cart-bubble");
const cartBtn = document.querySelector(".cart-label");
const barsBtn = document.querySelector(".menu-label");
const cartMenu = document.querySelector(".cart");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");
const successModal = document.querySelector(".add-modal");
const deleteBtn = document.querySelector(".btn-delete");

  // carrito
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const saveLocalStorage = (cartList) => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  };

   const renderProduct = (product) => {
    const { id, name, date,cardImg } = product;
    return ` 
    <div class="product">
        <img src=${cardImg} alt=${name} />
        <div class="product-info">
            <div class="product-top">
                <h3>${name}</h3>
            </div>
            <div class="product-mid">
                <div class="product-user">
                    <p>${date}</p>
                </div>
            </div>
            <div class="product-bot">
                    <button class="btn-add"
                    data-id='${id}'
                    data-name='${name}'
                    data-img='${cardImg}'>Comprá tu entrada</button>
                </div>
            </div>
        </div>
    </div>`;
  };
  

  const renderizarProduct = (product) => {
    ultimaProduct=product;
    saveLocalStorage();
    productsCart.innerHTML =renderProduct(product);
  };
  
 
  
  
  const init = () => {
    document.addEventListener("DOMContentLoaded", renderProduct);
    renderizarProduct(ultimaProduct);
  };
  
  init();