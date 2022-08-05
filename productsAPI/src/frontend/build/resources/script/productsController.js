
class ProductsController {
    constructor(currentId = 0) {
        this.currentId = currentId;
        this.products = [];
    }

    // Function that stores products as objects in a product array
    addProduct(name, description, imageUrl, createdAt) {
        const productObj = {
            name: name,
            description: description,
            imageUrl: imageUrl,
            createdAt: createdAt,
            id: this.currentId++
        };
        this.products.push(productObj);

        // Add/Update this._products array of objects as products in localStorage
        localStorage.setItem("products", JSON.stringify(this.products));

        // Upload to database
//        uploadProduct({name,  description, imageUrl});
        this.save({name,  description, imageUrl});
    
    }

    get products() {
        return this.products;
    }

    // Load localStorage and store it in this object's property _product's array
    loadProductsFromLocalStorage() {
        const storageProducts = localStorage.getItem("products");
        if (storageProducts) {
            const storedProducts = JSON.parse(storageProducts);
            for(let i = 0; i < storedProducts.length; i++) {
                this.products.push(storedProducts[i]);
            }
            console.log(this.products);
        }
    }

    save({name, description, imageUrl}){
        const data = { name,  description, imageUrl };

        fetch('http://localhost:8080/product', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    update({name,  description, imageUrl}) {
        // TODO implement this method
        const data = { name,  description, imageUrl };

            fetch(`http://localhost:8080/product/${id}`, {
                method: 'PUT', // 'POST' or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    delete(productId) {
        // TODO implement this method
        const data = { productId };

                    fetch(`http://localhost:8080/product/${productId}`, {
                        method: 'DELETE', // 'POST' or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
    }

    findById(productId) {
        // TODO implement this method
        const data = { productId };
        const url = `http://localhost:8080/product/${productId}`;
                    fetch(url, {
                        method: 'GET', // 'POST' or 'PUT'
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });

    }


}

export default ProductsController;
