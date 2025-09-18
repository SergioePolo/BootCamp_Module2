import express from 'express';
import { getAllProducts, postProduct, putProductById, deleteProductById } from '../controllers/products.controller.js';
import { upload } from '../config/multer.js';
export const productRouter = express.Router();
import {auth} from '../middleware/auth.js';

productRouter.get('/', getAllProducts);

productRouter.post('/', auth('admin'),upload.single('image'), postProduct);//El auth es la llamada a la revisión del middelware

productRouter.put('/:id', auth('admin'), putProductById);

productRouter.delete('/:id', auth('admin'), deleteProductById);