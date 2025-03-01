import { validateToken } from "../services/authorization.js";

function isPublic(url){
    const publicRoutes = ['/', '/login', '/signup', '/user/Login', '/user/Signin']
    return publicRoutes.includes(url)
}

export function checkForUserAuthentication(cookieName){
    return (req, res, next)=>{
        if(isPublic(req.originalUrl)){
            return next();
        }
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
