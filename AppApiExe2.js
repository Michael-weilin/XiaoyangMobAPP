const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

function Product(id, name, price, description) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.description = description;
}

let products = [
  new Product(1, 'Laptop', 1999, 'High performance laptop'),
  new Product(2, 'Smartphone', 1099, 'Latest model smartphone'),
];

// Task 01: List all products
app.get('/api/products/', function(req, res) {
  res.json(products);
});

// Task 02: Get a specific product by ID
app.get('/api/products/:productId', function(req, res) {
  const productId = parseInt(req.params.productId);
  const product = products.find(function(p) { return p.id === productId; });
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

// Task 03: Add a new product
app.post('/api/products', function(req, res) {
  const { name, price, description } = req.body;
  const newId = products[products.length - 1].id + 1; // Generate a new ID
  const newProduct = new Product(newId, name, price, description);
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Task 04: Edit an existing product
app.put('/api/products/:productId', function(req, res) {
  const productId = parseInt(req.params.productId);
  const productIndex = products.findIndex(function(p) { return p.id === productId; });
  if (productIndex !== -1) {
    const { name, price, description } = req.body;
    products[productIndex] = Object.assign(products[productIndex], { name, price, description });
    res.json(products[productIndex]);
  } else {
    res.status(404).send('Product not found');
  }
});

// Task 05: Delete a product
app.delete('/api/products/:productId', function(req, res) {
  const productId = parseInt(req.params.productId);
  const productIndex = products.findIndex(function(p) { return p.id === productId; });
  if (productIndex !== -1) {
    products = products.filter(function(p) { return p.id !== productId; });
    res.send('Product deleted');
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(port, function() {
  console.log(`Server running on port ${port}`);
});
