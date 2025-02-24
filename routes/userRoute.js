import express from "express"
import { handleUserSiginin, handleUserSignout, handleUserSignup } from "../controllers/userCredentials.js"
const userRoute = express.Router()

userRoute.post('/Login', handleUserSiginin)
userRoute.post('/Signin', handleUserSignup)
userRoute.get('/Signout', handleUserSignout)

export default userRoute;
