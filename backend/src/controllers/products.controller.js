import { productModel } from "../models/products.model.js";

export const postProduct = async (req, res) => {
    try {
        // inicializar el modelo para guardar en la base de datos
        await productModel.create(req.body);
        return res.status(201).json({
            msg:'The product was created succesfully'
        });
    } catch (error) {
        return res.status(400).json({
            msg: 'There was an error creating the product',
            error: error.message || error
        });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await productModel.find();
        return res.status(200).json({
            msg: 'All products where called from the db',
            data: allProducts
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'There was an error searching the products',
            error: error.message || error
        });
    }
};

export const putProductById = async (req,res) => {
    const idToUpdate = req.params.id;
    const data = req.body;

    await productModel.findByIdAndUpdate(idToUpdate, data);

    try {
        
        return res.status(202).json({
            msg: 'The product was updated succesfully',
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'There was an error updating the products',
            error: error.message || error
        });
    }
}

export const deleteProductById = async (req,res) => {
    const idToDelete = req.params.id;

    await productModel.findByIdAndDelete(idToDelete);

    try {
        
        return res.status(202).json({
            msg: 'The product was removed succesfully',
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'There was an error removing the product',
            error: error.message || error
        });
    }
}
