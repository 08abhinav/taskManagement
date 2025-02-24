import { validateToken } from "../services/authorization.js";

export function checkForUserAuthentication(cookieName){
    return (req, res, next)=>{

        const tokenCookieValue = req.cookies[cookieName];
        if(!tokenCookieValue){
            return res.status(403).json({message: "Authentication required"})
        }

        try {
            const userPayload = validateToken(tokenCookieValue)
            req.user = userPayload
            return next();
        } catch (error) {
            return res.json({message: "authentication failure"})
        }
    }
}
