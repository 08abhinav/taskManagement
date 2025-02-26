import express from "express"
import { handleUserSiginin, handleUserSignout, handleUserSignup } from "../controllers/userCredentials.js"
import cookieParser from "cookie-parser"
import { checkForUserAuthentication } from "../middleware/authenticate.js"
const userRoute = express.Router()
userRoute.use(cookieParser())

userRoute.post('/Login', handleUserSiginin)
userRoute.post('/Signin', handleUserSignup)
userRoute.get('/Signout', checkForUserAuthentication("user"),handleUserSignout)

export default userRoute;
