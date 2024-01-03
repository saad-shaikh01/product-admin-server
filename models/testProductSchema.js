import mongoose from 'mongoose';

const testProductSchema = new mongoose.Schema({
  testType: {
    type: String,
    required: true,
  },
  testID: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
    required: true,
  },
  productType: {
    type: String,
    required: true,
  },
});

const testProduct = mongoose.model('testProductForm', testProductSchema);

export default testProduct;
