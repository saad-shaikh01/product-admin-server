import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({

  productName: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
    required: true,
  },

});

const Product = mongoose.model('Product', productSchema);

export default Product;
