import { userModel } from '../models/users.model.js';
import { generateToken } from '../config/jwt.js';
import bcryptjs from 'bcryptjs';
import doetnv from 'dotenv';

doetnv.config();
export const login = async (req, res) => {
    
    try {
        const {email, password} = req.body;

        const emailValidation = await userModel.findOne({
            email: email
        })
        
        if(!emailValidation){
            return res.status(404).json({
                msg: "We couldn’t find your account.If you’re new here, please register. Otherwise, double-check your details and try again."
            });
        }
        
        const passwordValidation = await bcryptjs.compare(password, emailValidation.password);

        if(!passwordValidation){
            return res.status(401).json({
                msg: "Wrong password, please try again."
            });
        }

        const payload = {
            id: emailValidation._id,
            user: emailValidation.userName
        }

        emailValidation.role === 'admin' ? payload.admin = true : payload.admin = false;

        const token = await generateToken(payload);

        return res.status(200).json({
            msg:"Welcome again, it's great having you here",
            token: token
        })
    } catch (error) {
        return res.status(400).json({
                msg: "There was an error login your user, please try again later."
            });
    }
}
