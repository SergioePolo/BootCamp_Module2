import mongoose from 'mongoose';

export const mongoConection = async () => {
    try {
        await mongoose.connect(process.env.DB_URL,{dbName: "e-commerce"});
        console.log("conexión exitosa, bienvenido a MongoDB");
    } catch (error) {
        console.error("error de conexión: ", error);
    }
}