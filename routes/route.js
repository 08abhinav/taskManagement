import express from "express"
import cookieParser from "cookie-parser"
import { checkForUserAuthentication } from "../middleware/authenticate.js"
import {handleDeleteView, handleTaskCreation, handleUpdateView, handleUpdateTask, handleTaskView, handleTaskDeletion, handleSingleTaskView } from "../controllers/taskControl.js"

const route = express.Router()
route.use(cookieParser)
route.use(checkForUserAuthentication("user"))

//creation and view route
route.post("/tasks", handleTaskCreation)
route.get("/alltasks", handleTaskView)
route.get("/task/:id", checkForUserAuthentication("user"),handleSingleTaskView)

//update route
route.get("/:id", checkForUserAuthentication("user"),handleUpdateView)
route.put("/updateTask/:id", handleUpdateTask)

//Delete route
route.get("/delete/:id", checkForUserAuthentication("user"),handleDeleteView)
route.delete("/taskdelete/:id",handleTaskDeletion )

export default route