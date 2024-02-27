const express = require('express');
const app = express();
const port = 3000;

app.get('/Product/FixedDescription', function(req, res){
  res.send('product: gaming computer, qty: 2');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Task 2: Dynamic Description with Query Strings
app.get('/Product/DynamicDescription', function(req, res) {
  const productName = req.query.name;
  const quantity = req.query.qty;
  res.send(`Product: ${productName}, Quantity: ${quantity}`);
});

// Task 3: Redirect from Old to New Description
app.get('/Product/OldDescription', function(req, res) {
  res.redirect(301, '/Product/NewDescription');
});

app.get('/Product/NewDescription', function(req, res) {
  res.send('This is the new product description page.');
});

// Task 4: Product Details as JSON
app.get('/Product/Details', function(req, res) {
  const productName = req.query.name;
  const price = req.query.price;
  res.json({ Product: productName, Price: price });
});

// Task 5: Conditional Test Based on Query String Value
app.get('/Product/ConditionalTest', function(req, res) {
  const number = parseInt(req.query.number, 10);
  let message = 'The number is equal to 10.';
  if (number > 10) {
    message = 'The number is greater than 10.';
  } else if (number < 10) {
    message = 'The number is less than 10.';
  }
  res.send(message);
});
