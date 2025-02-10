import express from "express"
import { TaskModel } from "../models/tasks.js"

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

staticRoute.get("/updateTask", async(req, res)=>{
    const tasks = await TaskModel.find({})
    console.log(tasks)
    return res.render('taskUpdate',{tasks})
})

export default staticRoute