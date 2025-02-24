import express from "express"
import { checkForUserAuthentication } from "../middleware/authenticate.js"
import {handleDeleteView, handleTaskCreation, handleUpdateView, handleUpdateTask, handleTaskView, handleTaskDeletion, handleSingleTaskView } from "../controllers/taskControl.js"

const route = express.Router()
route.use(checkForUserAuthentication("user"))

//creation and view route
route.post("/tasks", handleTaskCreation)
route.get("/alltasks", handleTaskView)
route.get("/task/:id", handleSingleTaskView)

//update route
route.get("/:id", handleUpdateView)
route.put("/updateTask/:id", handleUpdateTask)

//Delete route
route.get("/delete/:id",handleDeleteView)
route.delete("/taskdelete/:id",handleTaskDeletion )

export default route