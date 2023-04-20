const { log } = require('console');
const express = require('express');
const fs = require('fs').promises

const router = express.Router();

router.post('/', async (req,res) => {
    //Crear carrito como un objeto con 2 atributos => {id: 1, products: []}
    try {
        let texto = await fs.readFile('../carritos.json', 'utf-8');
        let carts = JSON.parse(texto);
        let id = carts.length + 1;

        carts.forEach(element => {
            if(element.id === id) id++;
        })

        let newCart = {
            id,
            products: []
        }

        carts.push(newCart);

        let json = JSON.stringify(carts);

        await fs.writeFile('../carritos.json', json);

        res.status(200).send({msg: "Se creó el carrito correctamente", cart: newCart});
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get('/:cid', async (req,res) => {
    //Lista los productos que pertenezcan al carrito con el id del parametro
    try {
        let textoCarrito = await fs.readFile('../carritos.json', 'utf-8');
        let textoProductos = await fs.readFile('../productos.json', 'utf-8');
        let carts = JSON.parse(textoCarrito);
        let productos = JSON.parse(textoProductos);
        let cid = parseInt(req.params.cid);

        let productosDelCarritoSeleccionado = []
    
        let carrito = carts.find(carrito => carrito.id === cid);
    
        let cartProducts = carrito.products;

        cartProducts.forEach(productoCarro => {
            productos.forEach(producto => {
                if(producto.id === productoCarro.product){
                    productosDelCarritoSeleccionado.push(producto)
                }
            })
        })
        res.status(200).send(productosDelCarritoSeleccionado);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/:cid/product/:pid', async (req,res) => {
    //Deberá agregar el producto al arreglo "products" del carrito seleccionado en formato [{product: 1, quantity: 5}, {product: 5, quantity: 10}]
    try {
        let cid = parseInt(req.params.cid);
        let pid = parseInt(req.params.pid);
    
        let textoCarrito = await fs.readFile('../carritos.json', 'utf-8');
        let textoProductos = await fs.readFile('../productos.json', 'utf-8');
        let carts = JSON.parse(textoCarrito);
        let productos = JSON.parse(textoProductos);

        let carrito = carts.find(carrito => carrito.id === cid);
        let product = productos.find(product => product.id === pid);

        if(!carrito || !product){
            return res.status(400).send({msg: "Los parámetros no son validos"})
        }


        let productoEncontrado = carrito.products.find(elemento => elemento.product === pid);
        
        let contieneElProducto = false;

        productoEncontrado === undefined ? contieneElProducto = false : contieneElProducto = true; 

        if(!contieneElProducto) {
            let newProduct = {
                product: product.id,
                quantity: 1
            }

            carrito.products.push(newProduct)
        } else {
            productoEncontrado.quantity ++;
        }

        let json = JSON.stringify(carts);

        await fs.writeFile('../carritos.json', json);

        return res.status(200).send(carts);

    } catch (error) {
        res.status(400).send(error)
    }


})

module.exports = router;
