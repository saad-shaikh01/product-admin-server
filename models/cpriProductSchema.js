import mongoose from 'mongoose';

const cpriProductSchema = new mongoose.Schema({
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

const cpriProduct = mongoose.model('cpriProductForm', cpriProductSchema);

export default cpriProduct;
