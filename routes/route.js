import express from "express"
import {handleDeleteView, handleTaskCreation, handleUpdateView, handleUpdateTask, handleTaskView, handleTaskDeletion } from "../controllers/taskControl.js"

const route = express.Router()

route.post("/add", handleTaskCreation)
route.post("/updateTask/:id", handleUpdateTask)
route.post("/taskdelete/:id",handleTaskDeletion )
route.get("/alltasks", handleTaskView)
route.get("/:id", handleUpdateView)
route.get("/delete/:id",handleDeleteView)
export default route