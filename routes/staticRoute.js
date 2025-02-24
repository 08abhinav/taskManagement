import express from "express"
import cookieParser from "cookie-parser"
import {checkForUserAuthentication} from "../middleware/authenticate.js"
import { handleAllTaskView, handleCreateTask, 
handleHome, handleLoginView, handleSignupView, handleUserDashboard } from "../controllers/staticControl.js"

const staticRoute = express.Router()
staticRoute.use(cookieParser())

staticRoute.get("/", handleHome)
staticRoute.get('/dashboard', checkForUserAuthentication("user"), handleUserDashboard)
staticRoute.get("/allTasks", checkForUserAuthentication("user"), handleAllTaskView)
staticRoute.get("/createTask", checkForUserAuthentication("user"), handleCreateTask)

//user route
staticRoute.get('/login', handleLoginView)
staticRoute.get('/signup', handleSignupView)

export default staticRoute