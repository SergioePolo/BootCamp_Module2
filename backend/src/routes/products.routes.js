import express from 'express';
import { getAllProducts, postProduct, putProductById, deleteProductById } from '../controllers/products.controller.js';

export const productRouter = express.Router();

productRouter.get('/', getAllProducts);

productRouter.post('/',postProduct);

productRouter.put('/:id', putProductById);

productRouter.delete('/:id', deleteProductById);