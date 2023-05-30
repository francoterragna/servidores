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
    
    
    
    

    
    
    
    
    
    
    
    
    const mongoosePaginate = require('mongoose-paginate-v2');

CartSchema.plugin(mongoosePaginate);