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
    try {
            const getAllUsers = await userModel.find();
            return res.status(200).json({
                msg: 'All users where called from the db',
                data: getAllUsers
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'There was an error searching the users',
                error: error.message || error
            });
        }
};

export const putUserById = async (req,res) => {
    return res.json({msg: "el put funciona"});return res.status(400).json({
            msg: 'There was an error creating the product',
            error: error.message || error
        });
}

export const deleteUserById = async (req,res) => {
    const idToDelete = req.params.id;
    
        await userModel.findByIdAndDelete(idToDelete);
    
        try {
            
            return res.status(202).json({
                msg: 'The user was removed succesfully',
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'There was an error removing the user',
                error: error.message || error
            });
        }
}
