import express from "express"
import { handleTaskCreation, handleTaskView } from "../controllers/taskControl.js"

const route = express.Router()

route.post("/add", handleTaskCreation)
route.get("/alltasks", handleTaskView)

export default route