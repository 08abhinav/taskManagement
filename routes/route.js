import express from "express"
import { handleTaskCreation, handleUpdateView, handleUpdateTask, handleTaskView } from "../controllers/taskControl.js"

const route = express.Router()

route.post("/add", handleTaskCreation)
route.post("/updateTask/:id", handleUpdateTask)
route.get("/alltasks", handleTaskView)
route.get("/:id", handleUpdateView)

export default route