import {TaskModel} from "../models/tasks.js"

export async function handleTaskCreation(req, res){
    try {
        const {taskName, description, status} = req.body
        if(!taskName || !description) return res.json({message:"All fields are necessary"});

        await TaskModel.create({
            taskName,
            description,
            status
        })
        return res.render('home')
    } catch (error) {
        res.json({message: error.message})
    }
}

export async function handleTaskView(req, res){
    try {
        const tasks = await TaskModel.find({});
        console.log("Fetched Tasks:", tasks);

        return res.render("taskView", { tasks });
    } catch (error) {  
        return res.json({message:"Something went wrong while fetching the tasks."}) 
    }
}

// export async function handleTaskDeletion(req, res){

// }
