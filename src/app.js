const ProductManager = require('./ProductManager');
const express = require('express');
const app = express();
const port = 8080;
app.use(express.urlencoded({extended: true}));

const productManager = new ProductManager();

app.get('/products', async (req,res) => {
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

app.get('/products/:pid', async (req,res) => {
    let text = req.params.pid;
    let id = parseInt(text)

    const productoSolicitado = await productManager.getProductById(id);

    res.status(200).send({msg: productoSolicitado});
})



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })

