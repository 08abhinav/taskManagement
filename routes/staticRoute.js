import express from "express"
import { handleUpdateTask } from "../controllers/taskControl.js"

const staticRoute = express.Router()

staticRoute.get("/", (req, res)=>{
    return res.render("home")
})

staticRoute.get("/allTasks", (req, res)=>{
    return res.render("taskView")
})

staticRoute.get("/createTask", (req, res)=>{
    return res.render("taskCreate")
})

export default staticRoute