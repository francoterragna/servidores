const Product = require('../dao/models/products');

const getProducts = async (req,res) => {
    try {
        const {page = 1, limit = 10} = req.query;

        const options = {
            page: parseInt(page),
            limit: parseInt(limit)
        }

        await Product.paginate({}, options, (error, products) => {
            return error ? res.status(400).send({msg: "Error al obtener los productos"}) : res.status(200).send(products);
        })
    } catch (error) {
        res.status(400).send(error)
    }
}

const createProduct = async (req,res) => {

    try {

        const {title, description, code, price, status = true, stock, category, thumbnails} = req.body;
        const product = new Product(req.body);

        if(!title || !description || !code || !price || !stock || !category){
                return res.status(400).send({msg: "Todos los campos son obligatorios"})
        }

        const existe = await Product.findOne({code: code});
        if(existe != null){
            return res.status(400).send({msg: "El producto ya existe"});
        }

        const productStored = await product.save();

        res.status(200).send(productStored)

    
    } catch (error) {
        res.status(400).send(error)
    }
};

const getProductById = async (req,res) => {
    try {
        let id = req.params.pid;

        const productoEncontrado = await Product.findById(id);
        console.log(productoEncontrado);

        return res.status(200).send({msg: productoEncontrado})
        
    } catch (error) {
        res.status(400).send({msg: "No se encontró ningún producto con ese ID"})
    }
};

const updateProduct = async (req,res) => {
    try {
    const productData = req.body;
    const id = req.params.pid;

    await Product.findByIdAndUpdate({_id: id}, productData, {new: true})
    .then(updatedProduct => {
        res.status(200).send({
            msg: "Actualización correcta",
            product: updatedProduct
        });
        return;
    })
    .catch(error => {
        res.status(400).send({
            msg: "Error al actualizar el producto",
            error
        })
    })

    
    } catch (error) {
        res.status(400).send(error)
    }
};

const deleteProduct = async (req,res) => {
    try {
        let id = req.params.pid;

        const deletedProduct = await Product.findById(id);
        await Product.findByIdAndDelete(id);

        res.status(200).send({msg: `El producto ${deletedProduct.title} ha sido eliminado`})

    } catch (error) {
        res.status(400).send({
            msg: "No existe ningún producto con ese ID"
        })
    }
}


module.exports = {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
}