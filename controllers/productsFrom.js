import testProductSchema from "../models/testProductSchema.js";
import cpriProductSchema from "../models/cpriProductSchema.js";
import productSchema from "../models/productSchema.js";

export const testProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { testType, testID, productName, productID, productType } = req.body;

    const newSampleForm = new testProductSchema({
      testType,
      testID,
      productName,
      productID,
      productType,
    });

    const savedForm = await newSampleForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not submit the form", error: error.message });
  }
};

export const getAllTestProducts = async (req, res) => {
  try {
    const testProducts = await testProductSchema.find();
    res.status(200).json(testProducts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not fetch test products", error: error.message });
  }
};

export const cpriProduct = async (req, res) => {
  try {
    console.log(req.body);
    const { testType, testID, productName, productID, productType } = req.body;

    const newSampleForm = new cpriProductSchema({
      testType,
      testID,
      productName,
      productID,
      productType,
    });

    const savedForm = await newSampleForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not submit the form", error: error.message });
  }
};

export const getAllCpriProducts = async (req, res) => {
  try {
    const cpriProducts = await cpriProductSchema.find();
    res.status(200).json(cpriProducts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not fetch test products", error: error.message });
  }
};

export const productsFrom = async (req, res) => {
  try {
    console.log(req.body);
    const { testType, testID, productName, productID, productType } = req.body;

    const newSampleForm = new productSchema({
      testType,
      testID,
      productName,
      productID,
      productType,
    });

    const savedForm = await newSampleForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Could not submit the form", error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await productSchema.find();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Could not fetch test products", error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    // Find the product by ID and remove it
    const deletedProduct = await productSchema.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error) {
    return res.status(500).json({ message: 'Could not delete product', error: error.message });
  }
}
export const deleteTestProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    // Find the product by ID and remove it
    const deletedProduct = await testProductSchema.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error) {
    return res.status(500).json({ message: 'Could not delete product', error: error.message });
  }
}
export const deleteCpriProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    // Find the product by ID and remove it
    const deletedProduct = await cpriProductSchema.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error) {
    return res.status(500).json({ message: 'Could not delete product', error: error.message });
  }
}