import express from 'express';
import { getAllProducts, postProduct, putProductById, deleteProductById } from '../controllers/products.controller.js';
import { upload } from '../config/multer.js';
export const productRouter = express.Router();

productRouter.get('/', getAllProducts);

productRouter.post('/',upload.single('image'), postProduct);

productRouter.put('/:id', putProductById);

productRouter.delete('/:id', deleteProductById);