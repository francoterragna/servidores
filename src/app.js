const ProductManager = require('./ProductManager');
const express = require('express');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/products', productsRouter);

app.use('/api/carts', cartsRouter);


app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })

