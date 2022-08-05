
// Import
import ProductsController from "./productsController.js";
import { addProductCard, renderProductCards } from "./products.js";

const productObj = new ProductsController();
const productForm = document.querySelector(".productForm");

// Load the card from localStorage on page load
// renderProductCards();    // Can either be invoked in products.js or here

productForm.onsubmit = (event) => {
    event.preventDefault();

    const productName = document.getElementById('productName');
    const productDescription = document.getElementById('productDescription');
    const productImg = document.getElementById('productImg');
    
    // Run method that create object and push it in Object._products array
    productObj.addProduct(productName.value, productDescription.value, productImg.value, Date());

    // Upload Database
    // productObj.save(productName.value, productDescription.value, productImg.value);

    // Clear the form on event triggered
    productDescription.value = '';
    productName.value = '';
    productImg.value = '';

    // Create card element and append when the event triggered
    addProductCard(productObj.products.at(-1));

    // Logging localStorage when the form event triggered
    console.log(localStorage.getItem("products"));
    console.log(productObj);
    console.log(productObj.products);

};

// Logging localStorage when the page reload
//console.log(localStorage.getItem("products"));
console.log(productObj);
console.log(productObj.products);

