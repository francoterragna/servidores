const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CartSchema = mongoose.Schema({
    products: [
        {
          _id: false ,
          pid: String,
          quantity: Number
        }
    ]
});

CartSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Cart', CartSchema);