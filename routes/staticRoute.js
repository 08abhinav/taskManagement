import express from "express"
import { handleUpdateTask } from "../controllers/taskControl.js"
import { handleAllTaskView, handleCreateTask, 
handleHome, handleLoginView, handleSignupView } from "../controllers/staticControl.js"

const staticRoute = express.Router()

staticRoute.get("/", handleHome)
staticRoute.get("/allTasks", handleAllTaskView)
staticRoute.get("/createTask", handleCreateTask)

//user route
staticRoute.get('/login', handleLoginView)
staticRoute.get('/signup', handleSignupView)

export default staticRoute