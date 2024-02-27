const express = require('express');
const app = express();
const port = 3000;

app.get('/Product/FixedDescription', function(req, res){
  res.send('product: gaming computer, qty: 2');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
