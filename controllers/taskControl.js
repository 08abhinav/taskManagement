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
        const task = tasks.sort((a, b) => a.status - b.status);
        return res.render("taskView", { tasks:task });
    } catch (error) {  
        return res.json({message:"Something went wrong while fetching the tasks."}) 
    }
}


export async function handleUpdateTask(req, res){
    try {
        const { taskName, description, status } = req.body;
        const updatedTask = await TaskModel.findByIdAndUpdate(req.params.id, {
            taskName,
            description,
            status: status === "on" ? true : false, // Convert checkbox value to boolean
        }, { new: true });

        if (!updatedTask) {
            return res.status(404).json({message: "Task not found"});
        }
        const tasks = await TaskModel.find({});
        return res.render("taskView", { tasks });
    } catch (error) {
        return res.json({message:"Error while updation", error:error.message});
    }
}

export async function handleUpdateView(req, res){
    try {
        const task = await TaskModel.findById(req.params.id)
        if(!task) return res.json({message:"No task found"});
        return res.render("taskUpdate",{task})
    } catch (error) {
        return res.json({message:"Something went wrong while fetching the task."})
    }
}

export async function handleDeleteView(req, res){
    try {
        const task = await TaskModel.findById(req.params.id)
        if(!task) return res.json({message:"No task found"});
        return res.render("deleteTask",{task})
    } catch (error) {
        return res.json({message:"Something went wrong while fetching the task."})
    }
}

export async function handleTaskDeletion(req, res){
    try {
        const deletedTask = await TaskModel.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        const tasks = await TaskModel.find({});
        return res.render("taskView", { tasks });
        
    } catch (error) {
        return res.status(500).json({ message: "Error while deleting", error: error.message });
    }
}
