const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
  products: [
    {
      _id: false ,
      pid: String,
      quantity: Number
    }
  ]
});


module.exports = mongoose.model('Cart', CartSchema);