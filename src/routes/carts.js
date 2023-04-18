const express = require('express');
const fs = require('fs').promises

const router = express.Router();

router.post('/', async (req,res) => {
    //Crear carrito como un objeto con 2 atributos => {id: 1, products: []}
})

router.get('/:cid', async (req,res) => {
    //Lista los productos que pertenezcan al carrito con el id del parametro
})

router.post('/:cid/product/:pid', async (req,res) => {
    //Deberá agregar el producto al arreglo "products" del carrito seleccionado en formato [{product: 1, quantity: 5}, {product: 5, quantity: 10}]
})

module.exports = router;
