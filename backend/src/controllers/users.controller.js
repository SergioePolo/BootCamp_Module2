import { userModel } from "../models/users.model.js";

export const postUser = (req, res) => {
  return res.json({ msg: "el post funciona" });
};

export const getAllUsers = (req, res) => {
    return res.json({msg: "El get funciona"});
};

export const putUserById = (req,res) => {
    return res.json({msg: "el put funciona"});
}

export const deleteUserById = (req,res) => {
    return res.json({msg: "el delete funciona"});
}
