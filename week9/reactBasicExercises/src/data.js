// TaskThree data.js
class Product {
    constructor(name, description, unitPrice) {
        this.name = name;
        this.description = description;
        this.unitPrice = unitPrice;
    }
}

const products = [
    new Product('Laptop', 'High-performance laptop', 1200.00),
    new Product('Phone', 'Smartphone with great camera', 800.00),
    new Product('Headphones', 'Noise-canceling headphones', 150.00),
    // Add more products here...
];

export default products;
