import { productModel } from "../models/products.model.js";

export const postProduct = (req, res) => {
  return res.json({ msg: "el post funciona" });
};

export const getAllProducts = (req, res) => {
    return res.json({msg: "El get funciona"});
};

export const putProductById = (req,res) => {
    return res.json({msg: "el put funciona"});
}

export const deleteProductById = (req,res) => {
    return res.json({msg: "el delete funciona"});
}
