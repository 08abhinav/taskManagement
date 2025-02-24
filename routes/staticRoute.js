import express from "express"
import {checkForUserAuthentication} from "../middleware/authenticate.js"
import { handleAllTaskView, handleCreateTask, 
handleHome, handleLoginView, handleSignupView } from "../controllers/staticControl.js"

const staticRoute = express.Router()

staticRoute.get("/", handleHome)

staticRoute.get("/allTasks", checkForUserAuthentication("user"),handleAllTaskView)
staticRoute.get("/createTask", checkForUserAuthentication("user"),handleCreateTask)

//user route
staticRoute.get('/login', handleLoginView)
staticRoute.get('/signup', handleSignupView)

export default staticRoute