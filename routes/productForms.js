import express from 'express';
import { testProduct, cpriProduct, productsFrom, getAllTestProducts, getAllCpriProducts, getAllProducts, deleteProduct, deleteTestProduct, deleteCpriProduct } from '../controllers/productsFrom.js';
const router = express.Router();


router.post('/testProduct', testProduct);
router.post('/cpriProduct', cpriProduct);
router.post('/product', productsFrom);
router.get('/testProducts', getAllTestProducts);
router.get('/cpriProducts', getAllCpriProducts);
router.get('/products', getAllProducts);
router.delete('/product/:productId', deleteProduct)
router.delete('/testProduct/:productId', deleteTestProduct)
router.delete('/cpriProduct/:productId', deleteCpriProduct)

export default router;
