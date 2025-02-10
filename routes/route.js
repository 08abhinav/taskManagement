import express from "express"
import { handleTaskCreation } from "../controllers/taskControl.js"

const route = express.Router()

route.post("/add", handleTaskCreation)

export default route