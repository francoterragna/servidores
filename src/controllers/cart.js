const Cart = require('../dao/models/carts');
const Product = require('../dao/models/products')


const createCart = async (req,res) => {
    //Crear carrito como un objeto con 2 atributos => {id: 1, products: []}
    try {
        const carrito = new Cart();
        const cartStored = await carrito.save();

        res.status(200).send({
            msg: "Se ha creado un nuevo carrito",
            cartStored
        })
        
    } catch (error) {
        res.status(400).send(error);
    }
};

const getCarts = async (req,res) => {
    //Lista los productos que pertenezcan al carrito con el id del parametro
    try {
        const cid = req.params.cid
        // carts.docs[0].products

        const cartFound = await Cart.findById(cid);
        res.status(200).send({products: cartFound.products});
        
    } catch (error) {
        res.status(400).send(error)
    }
}

const addProductToCart = async (req,res) => {
    try {
        const cid = req.params.cid;
        const pid = req.params.pid;

        let carrito = await Cart.findById(cid);

        if(carrito.products.length === 0 || carrito.products.find(element => pid === element.pid) === undefined){
            const data = {
                            pid,
                            quantity: 1
                        }
            carrito.products.push(data);

            await Cart.findByIdAndUpdate({_id: cid}, carrito, {new: true})
            .then(updatedCart => {
                    res.status(200).send({
                        msg: "Se agregó el producto al carrito",
                        cart: updatedCart
                    });
                    return;
            })
            .catch(error => {
                console.log(error);
                res.status(400).send({error});
            })
        } else {
            let productoExistenteEnElCarrito = carrito.products.find(element => pid === element.pid);
            console.log(productoExistenteEnElCarrito);
            productoExistenteEnElCarrito.quantity ++;

            await Cart.findByIdAndUpdate({_id: cid}, carrito, {new: true})
            .then(updatedCart => {
                res.status(200).send({
                    updatedCart
                })
            }).catch(error => {
                res.status(400).send(error)
            })

        }         

    } catch (error) {
        console.log(error);
        console.log("Hay un error");
        res.status(400).send(error)
    }


}


module.exports = {
    createCart,
    addProductToCart,
    getCarts
}