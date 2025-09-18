import dotenv from 'dotenv';
import jsonwebtoken from 'jsonwebtoken';

dotenv.config();

const key = process.env.SECRET_KEY;

//Configuración del uso de jsonwebtoken

//1.1 Método para generar un JWT
//PAYLOAD - Información del usuario
export const generateToken = (payload)=>{
    return new Promise((resolve, reject)=>{
        jsonwebtoken.sign(payload, key, {expiresIn: '1h'}, (error,token)=>{
            if(error){
                reject(new Error('Se genero un error al firmar el token', error.message));
            }
            else{
                resolve(token);
            }
        });
    });
}

//1.2 Método para verificar un JWT
export const verifyToken = (token) => {
    return new Promise((resolve, reject)=>{
        jsonwebtoken.verify(token, key, (error, decoded) => {
            if(error){
                reject(new Error('Se genero un error al momento de validar el token', error.message));
            }
            else{
                resolve(decoded);
            }
        });
    });
}