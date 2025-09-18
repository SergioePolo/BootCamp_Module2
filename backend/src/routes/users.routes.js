import express from 'express';
import { getAllUsers, postUser, putUserById, deleteUserById } from '../controllers/users.controller.js';
import { auth } from '../middleware/auth.js';

export const UserRouter = express.Router();

UserRouter.get('/', auth('admin'), getAllUsers);

UserRouter.post('/',postUser);

UserRouter.put('/:id', putUserById);

UserRouter.delete('/:id', deleteUserById);