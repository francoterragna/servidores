        //= GET PRODUCTS

        // let limit = req.query.limit;
        // let texto = await fs.readFile('../productos.json', 'utf-8');
        // let totalProductos = JSON.parse(texto);
        // if(limit !== undefined){
        //     const nuevoArray = [];
        //     if(limit > totalProductos.length){
        //         limit = totalProductos.length
        //     }
        //     for (let i = 0; i < limit; i++) {
        //         nuevoArray.push(totalProductos[i]) 
        //     }
        //     res.status(200).send(nuevoArray)
        // }else {
        //     console.log(totalProductos);
        //     res.render('home', {products:totalProductos})
        // }


        //= CREATE PRODUCTS

        //     let texto = await fs.readFile('../productos.json', 'utf-8');
        //     let products = JSON.parse(texto);
        //     let id = products.length + 1;

        
        // const {title, description, code, price, status = true, stock, category, thumbnails} = req.body;
        
        // let existeElProducto = false;

        //     products.forEach(element => {
        //         if(element.code === req.body.code){
        //              existeElProducto = true;
        //         }
        //         if(element.id === id) id++;
        //     })


        // if(!title || !description || !code || !price || !stock || !category){
        //     return res.status(400).send({msg: "Todos los campos son obligatorios"});
            
        // } else if (existeElProducto) {
        //     return res.status(400).send({msg: "El producto ya existe"});
        // } else {

        //     let nuevoProducto = {
        //         id,
        //         title,
        //         description,
        //         code,
        //         price,
        //         stock,
        //         status,
        //         category,
        //         thumbnails
        //     }
        //     products.push(nuevoProducto);
        //     let json = JSON.stringify(products)

        //     await fs.writeFile('../productos.json', json);
        //     return res.status(200).send({msg: "Se agregó el producto con exito", products: products})
        // }


        //= GET PRODUCT BY ID

        // let texto = await fs.readFile('../productos.json', 'utf8');
        // let products = JSON.parse(texto);
        // let productoEncontrado = products.find( producto => producto.id === id );
        
        // if(!productoEncontrado){
        //     return res.status(400).send({msg:"No se encontró ningun producto con ese id"})
        // } else {
        //     res.status(200).send({msg:"Success",product: productoEncontrado});
        // }


        //= UPDATE PRODUCT

        // let texto = await fs.readFile('../productos.json', 'utf-8');
    // let products = JSON.parse(texto);

    // let productoEncontrado = products.find( producto => producto.id === id );

    // if(req.body.id != undefined) {
    //     return res.status(400).send({msg: 'No se puede modificar el id del producto'})
    // }

    // if(!productoEncontrado){

    //     return res.status(400).send({msg:"No se encontró ningún producto con ese ID"});
    
    // } else{
    //     title !== undefined ? productoEncontrado.title = title : productoEncontrado.title;
    //     description !== undefined ? productoEncontrado.description = description : productoEncontrado.description;
    //     price !== undefined ? productoEncontrado.price = price : productoEncontrado.description;
    //     thumbnails !== undefined ? productoEncontrado.thumbnails = thumbnails : productoEncontrado.thumbnails;
    //     code !== undefined ? productoEncontrado.code = code : productoEncontrado.code;
    //     stock !== undefined ? productoEncontrado.stock = stock : productoEncontrado.stock;
    //     category !== undefined ? productoEncontrado.category = category : productoEncontrado.category;


    //     let json = JSON.stringify(products)

    //     await fs.writeFile('../productos.json', json);

    //     return res.status(200).send({msg: `Se ha actualizado el producto con id ${id}`, updatedProduct: productoEncontrado})
    // }


    // = DELETE PRODUCT

    // let texto = await fs.readFile('../productos.json', 'utf-8');

    // let products = JSON.parse(texto);
    

    // let productoEncontrado = products.find( producto => producto.id === id );

    // if(!productoEncontrado){
    //     return res.status(400).send({msg: "No se encontró ningún producto con ese ID"});
    // } else {
    //     let indice = products.indexOf(productoEncontrado);
    //     products.splice(indice, 1);
    //     let json = JSON.stringify(products);
    //     await fs.writeFile('../productos.json', json);
    //     res.status(200).send({msg: `Producto con id ${productoEncontrado.id} eliminado`})
    // }