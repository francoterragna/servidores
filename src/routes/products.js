const express = require('express');
const ProductManager = require('../ProductManager');

const router = express.Router();

const productManager = new ProductManager();

//!GET

router.get('/:pid', async (req,res) => {
    let text = req.params.pid;
    let id = parseInt(text)

    const productoSolicitado = await productManager.getProductById(id);

    res.status(200).send({msg: productoSolicitado});
});


router.get('/', async (req,res) => {
    let limit = req.query.limit;
    const totalProductos = await productManager.getProducts();
    if(limit !== undefined){
        const nuevoArray = [];
        if(limit > totalProductos.length){
            limit = totalProductos.length
        }
        for (let i = 0; i < limit; i++) {
            nuevoArray.push(totalProductos[i]) 
        }
        res.status(200).send(nuevoArray)
    }else {
        res.status(200).send(totalProductos);
    }
})

//! POST

router.post('/', async (req,res) => {
    const {title, description, code, price, status = true, stock, category, thumbnails} = req.body

    if(!title || !description || !code || !price || !stock || !category){
        console.log(await productManager.addProduct(req.body))
        return res.status(400).send({msg: "Todos los campos son obligatorios"});
        
    } else if (await productManager.addProduct(req.body)) {
        console.log(await productManager.addProduct(req.body));
        return res.status(400).send({msg: "El producto ya existe"});
    } else {
        console.log(await productManager.addProduct(req.body));
        const totalProductos = await productManager.getProducts();
       return res.status(200).send({msg: "Se agregó el producto con exito", products: totalProductos})
    }

})


module.exports = router;