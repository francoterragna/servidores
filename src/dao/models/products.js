const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ProductSchema = mongoose.Schema({
        title: String,
        description: String,
        price: Number,
        thumbnail: String,
        code: String,
        category: String,
        stock: Number
})

ProductSchema.plugin(mongoosePaginate); // Con esto puedo hacer la paginación con mongoose

module.exports = mongoose.model('Product', ProductSchema);