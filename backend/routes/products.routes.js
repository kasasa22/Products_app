import express from 'express';
import { getProducts, getProduct, createProduct, deleteProduct, updateProduct } from '../controller/products.controller.js';


const router = express.Router();




router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', createProduct)

router.post('/:id', deleteProduct)

router.put('/:id',updateProduct)





export default router
    