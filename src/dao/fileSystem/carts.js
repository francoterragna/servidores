//= CREATE CART

// let texto = await fs.readFile('../carritos.json', 'utf-8');
        // let carts = JSON.parse(texto);
        // let id = carts.length + 1;

        // carts.forEach(element => {
        //     if(element.id === id) id++;
        // })

        // let newCart = {
        //     id,
        //     products: []
        // }

        // carts.push(newCart);

        // let json = JSON.stringify(carts);

        // await fs.writeFile('../carritos.json', json);

        // res.status(200).send({msg: "Se creó el carrito correctamente", cart: newCart});

        //= GET CARTS

        // let textoCarrito = await fs.readFile('../carritos.json', 'utf-8');
        // let textoProductos = await fs.readFile('../productos.json', 'utf-8');
        // let carts = JSON.parse(textoCarrito);
        // let productos = JSON.parse(textoProductos);
        // let cid = parseInt(req.params.cid);

        // let productosDelCarritoSeleccionado = []
    
        // let carrito = carts.find(carrito => carrito.id === cid);
    
        // let cartProducts = carrito.products;

        // cartProducts.forEach(productoCarro => {
        //     productos.forEach(producto => {
        //         if(producto.id === productoCarro.product){
        //             productosDelCarritoSeleccionado.push(producto)
        //         }
        //     })
        // })
        // res.status(200).send(productosDelCarritoSeleccionado);

        //= ADD PRODUCT TO CART

        // let textoCarrito = await fs.readFile('../carritos.json', 'utf-8');
        // let textoProductos = await fs.readFile('../productos.json', 'utf-8');
        // let carts = JSON.parse(textoCarrito);
        // let productos = JSON.parse(textoProductos);

        // let carrito = carts.find(carrito => carrito.id === cid);
        // let product = productos.find(product => product.id === pid);

        // if(!carrito || !product){
        //     return res.status(400).send({msg: "Los parámetros no son validos"})
        // }


        // let productoEncontrado = carrito.products.find(elemento => elemento.product === pid);
        
        // let contieneElProducto = false;

        // productoEncontrado === undefined ? contieneElProducto = false : contieneElProducto = true; 

        // if(!contieneElProducto) {
        //     let newProduct = {
        //         product: product.id,
        //         quantity: 1
        //     }

        //     carrito.products.push(newProduct)
        // } else {
        //     productoEncontrado.quantity ++;
        // }

        // let json = JSON.stringify(carts);

        // await fs.writeFile('../carritos.json', json);

        // return res.status(200).send(carts);