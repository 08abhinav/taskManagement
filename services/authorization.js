import "dotenv/config"
import jwt from "jsonwebtoken";

const secret = process.env.SECRET

export function createToken(user){
    const payload = {
        id: user._id,
        name: user.fullName, 
        email: user.email
    }
    const token = jwt.sign(payload, secret);
    return token;
}

export function validateToken(token){
    const payload = jwt.verify(token, secret);
    return payload;
}