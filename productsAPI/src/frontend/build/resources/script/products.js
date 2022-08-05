
// Imports
import ProductsController from "./productsController.js";

// Initialize a new Object
const productObj = new ProductsController();

// Function that create Card Representation of the product
const addProductCard = product => {
    const listProducts = document.getElementById('list-products');
    
    const newProductCol = document.createElement("div");
    newProductCol.setAttribute("class", "col");

    const newProductCard = document.createElement("div");
    newProductCard.setAttribute("class", "card");
    newProductCard.setAttribute("style", "width: 18rem;");
    
    // Product Image
    const productCardImg = document.createElement("img");
    productCardImg.setAttribute("src", `${product._img}`);

    const productCardBody = document.createElement("div");
    productCardBody.setAttribute("class", "card-body");
    
    // Product Name/Title
    const productCardTitle = document.createElement("h5");
    productCardTitle.setAttribute("class", "card-title");
    productCardTitle.innerHTML = `${product._name}`;

    // Product Description
    const productCardText = document.createElement("p");
    productCardText.setAttribute("class", "card-text");
    productCardText.innerHTML = `${product._description}`;

    // Product Button
    const productAnchorButton = document.createElement("a");
    productAnchorButton.setAttribute("class", "btn btn-primary");
    productAnchorButton.setAttribute("href", "#");
    productAnchorButton.textContent = "View product";

    // Append elements in order
    productCardBody.append(productCardTitle, productCardText, productAnchorButton);
    newProductCard.append(productCardImg, productCardBody);
    newProductCol.appendChild(newProductCard);
    listProducts.appendChild(newProductCol);
}

// Function that saves data in local storage
// const storeProducts = product => {
//     // const sampleProducts = [];
//     if(!localStorage.getItem("products")) {
//         // Convert JSON to string and store it in products property of localStorage
//         localStorage.setItem("products", JSON.stringify(product));
//     }
// }

const renderProductCards = () => {
    productObj.loadProductsFromLocalStorage();
    for (let i = 0; i < productObj.products.length; i++) {
        addProductCard(productObj.products[i]);
    }
}

// Load the card from localStorage on page load
renderProductCards();       // Can either be invoked in product-forms.js or here

export {addProductCard, renderProductCards};