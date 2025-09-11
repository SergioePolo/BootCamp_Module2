import { userModel } from "../models/users.model.js";
import bcryptjs from 'bcryptjs';

export const postUser = async (req, res) => {
    try {
        const { fullName, userName, email, age, password, role }  = req.body;
        const passwordEncripted = await bcryptjs.hash(password, 10);
        await userModel.create({
            fullName,
            userName,
            email,
            age,
            password: passwordEncripted,
            role
        });
        
        return res.status(201).json({
            msg:'The user was created succesfully'
        });
    } catch (error) {
        return res.status(400).json({
            msg: 'There was an error creating the product',
            error: error.message || error
        });
    }
};

export const getAllUsers = async (req, res) => {
    return res.json({msg: "El get funciona"});
};

export const putUserById = async (req,res) => {
    return res.json({msg: "el put funciona"});return res.status(400).json({
            msg: 'There was an error creating the product',
            error: error.message || error
        });
}

export const deleteUserById = async (req,res) => {
    return res.json({msg: "el delete funciona"});
}
