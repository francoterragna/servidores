const fs = require('fs').promises;

class ProductManager {

    constructor(path){
        this.path = path;
    }

    async addProduct(objeto){
        let texto = await fs.readFile('../productos.json', 'utf-8');

        let products = JSON.parse(texto);

        let id = products.length + 1;


        let existeElProducto = false;

        products.forEach(element => {
            if(element.code === objeto.code){
                 existeElProducto = true;
            }
            if(element.id === id) id++;
        })
        
            objeto.id = id;
            
            !existeElProducto ? products.push(objeto) : existeElProducto = true;

            // console.log(existeElProducto);

            let json = JSON.stringify(products)

            await fs.writeFile('../productos.json', json);

    }

    async getProducts(){
       let texto = await fs.readFile('../productos.json', 'utf-8');
       let products = JSON.parse(texto);
       return products;
    }

    async getProductById(id){
        
            let texto = await fs.readFile('../productos.json', 'utf8');
            let products = JSON.parse(texto);
            let productoEncontrado = products.find( producto => producto.id === id );
    
            if(!productoEncontrado) productoEncontrado = "No se encontró ningún producto con ese ID";
    
            console.log("Producto encontrado:");
            console.log(productoEncontrado); 
            return productoEncontrado
       
    }


// !=SE LE PUEDEN MODIFICAR LOS CAMPOS QUE QUIERAS

    async updateProduct(id, productoActualizado){

        let texto = await fs.readFile('../productos.json', 'utf-8');
        let products = JSON.parse(texto);

        let productoEncontrado = products.find( producto => producto.id === id );

        if(!productoEncontrado) return productoEncontrado = "No se encontró ningún producto con ese ID";

        if(productoActualizado.id) console.log("No se puede actualizar el id de un producto");
        productoActualizado.title !== undefined ? productoEncontrado.title = productoActualizado.title : productoEncontrado.title;
        productoActualizado.description !== undefined ? productoEncontrado.description = productoActualizado.description : productoEncontrado.description;
        productoActualizado.price !== undefined ? productoEncontrado.price = productoActualizado.price : productoEncontrado.description;
        productoActualizado.thumbnail !== undefined ? productoEncontrado.thumbnail = productoActualizado.thumbnail : productoEncontrado.thumbnail;
        productoActualizado.code !== undefined ? productoEncontrado.code = productoActualizado.code : productoEncontrado.code;
        productoActualizado.stock !== undefined ? productoEncontrado.stock = productoActualizado.stock : productoEncontrado.stock;
        
        console.log(products);

        let json = JSON.stringify(products)

        await fs.writeFile('../productos.json', json);

    }


    async deleteProduct(id){
        let texto = await fs.readFile('../productos.json', 'utf-8');
        let products = JSON.parse(texto);
        let productoEncontrado = products.find( producto => producto.id === id );
        if(!productoEncontrado) return productoEncontrado = "No se encontró ningún producto con ese ID";
        let indice = products.indexOf(productoEncontrado);
        console.log(`Producto con id ${productoEncontrado.id} eliminado`);
        products.splice(indice, 1);
        let json = JSON.stringify(products);
        await fs.writeFile('../productos.json', json);
    }
}

// const pruebas = new ProductManager();

module.exports = ProductManager;


        // = FUNCIONA
        //  pruebas.addProduct(
        //   {
        //         title: "pintura",
        //         description: "azul",
        //         price: 150,
        //         thumbnail: "vacio",
        //         code: "vbnmblue",
        //         stock: 11
        //     }
        // )
        
        // = FUNCIONA
        // pruebas.getProducts();
        
        
        // = FUNCIONA
        // pruebas.getProductById(2)
        
        // Se puede elegir no poner alguno de los campos (comentarlos) y no lo va a actualizar
        // let nuevo = {
        //     title: "Producto actualizado",
        //     description: "Sony",
        //     price: 200,
        //     thumbnail: "Nada",
        //     code: "abc85546",
        //     stock: 85
        // }

        // = FUNCIONA
        // pruebas.updateProduct(1,nuevo);
        

        // = FUNCIONA
        // pruebas.deleteProduct(2);
        // pruebas.deleteProduct(3);