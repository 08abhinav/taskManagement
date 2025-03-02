import express from "express"
import cookieParser from "cookie-parser"
import {checkForUserAuthentication} from "../middleware/authenticate.js"
import { handleCreateTask, handleHome, handleLoginView, 
    handleSignupView, handleUserDashboard } from "../controllers/staticControl.js"

const staticRoute = express.Router()
staticRoute.use(cookieParser())
staticRoute.use(checkForUserAuthentication("user"))

staticRoute.get("/", handleHome)
staticRoute.get('/dashboard', checkForUserAuthentication("user"), handleUserDashboard)
staticRoute.get("/createTask", checkForUserAuthentication("user"), handleCreateTask)

//user route
staticRoute.get('/login', handleLoginView)
staticRoute.get('/signup', handleSignupView)

export default staticRoute