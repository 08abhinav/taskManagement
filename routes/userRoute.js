import express from "express"
import { handleUserSiginin, handleUserSignout, handleUserSignup } from "../controllers/userCredentials.js"
const userRoute = express.Router()

userRoute.post('/userLogin', handleUserSiginin)
userRoute.post('/userSignin', handleUserSignup)
userRoute.get('/userSignout', handleUserSignout)

export default userRoute;
