const express = require('express');
const handlebars = require('express-handlebars');
const fs = require('fs').promises;
const { Server } = require('socket.io');

const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();
// const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extended: true}));


app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine','handlebars');

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

module.exports = app;
