import mongoose from 'mongoose';
const {Schema} = mongoose;

const productSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required:true
    }
    ,
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    categories: {
        type: String,
        enum: ["helado", "carnes", "alcohol", "frituras"]
    },
    isAvailable: {
        type: Boolean,
        required: true
    }
});

export const productModel = mongoose.model("products", productSchema);
