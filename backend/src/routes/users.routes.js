import express from 'express';
import { getAllUsers, postUser, putUserById, deleteUserById } from '../controllers/users.controller.js';

export const UserRouter = express.Router();

UserRouter.get('/', getAllUsers);

UserRouter.post('/',postUser);

UserRouter.put('/:id', putUserById);

UserRouter.delete('/:id', deleteUserById);