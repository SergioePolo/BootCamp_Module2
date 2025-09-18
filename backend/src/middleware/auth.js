import { verifyToken} from '../config/jwt.js';

export const auth = (roleRequired) => {
    return  async (req, res, next) => {
        //Verificación de envió de un token en el header de la petición
        const token = req.headers['authorization'];//Accede al header de la aplicación, busca y acceder a la autorización
        const requiredRole = 'admin';

        if(!token){
            return res.status(401).json({
                msg: "The system didn't receive a token, access denied"
            });
        }
        const validToken = token.split(' ')[1];

        try {
            const tokenDecoded = await verifyToken(validToken);
            console.log('token correctly decoded ', tokenDecoded);

            if(requiredRole === 'admin' && tokenDecoded.admin === false){
                return res.status(401).json({
                    msg:"You don't have enough permissions levels to perform this operation"
                })
            }
            else{

            }

        } catch (error) {
            return res.status(401).json({
                msg: "The token is not valid",
            });
        }

        next();
    }
}