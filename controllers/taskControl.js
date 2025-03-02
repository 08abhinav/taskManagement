import {TaskModel} from "../models/tasks.js"

// Task Creation
export async function handleTaskCreation(req, res){
    try {
        const {taskName, description, priority, status} = req.body;
        if(!taskName || !description) {
            return res.json({message:"All fields are necessary"});
        }
        await TaskModel.create({
            taskName,
            description,
            createdBy: req.user.id,
            priority,
            status
        })
        return res.redirect('/dashboard')
    } catch(error) {
        res.json({message: error.message})
    }
}

//AllTask View
export async function handleTaskView(req, res){
    try {
        const tasks = await TaskModel.find({createdBy:req.user.id});
        const task = tasks.sort((a, b) => a.status - b.status);
        return res.render("taskView", { tasks:task, user:req.user});
    } catch (error) {  
        return res.json({message:"Something went wrong while fetching the tasks."}) 
    }
}

// Single Task View
export async function handleSingleTaskView(req, res){
    try {
        const task = await TaskModel.findById(req.params.id);
        if(!task) return res.json({message: "No tasks found"});
        return res.render("singleTaskView", {task:[task], user: req.user})
    } catch (error) {
        return res.json({message:"Something went wrong", error:error.message})
    }
}

// Update Task
export async function handleUpdateTask(req, res){
    try {
        const { taskName, description, status } = req.body;
        const updatedTask = await TaskModel.findByIdAndUpdate(req.params.id, {
            taskName,
            description,
            status: status === "on" ? true : false,
            createdBy: req.user.id
        }, { new: true });

        if (!updatedTask) {
            return res.status(404).json({message: "Task not found"});
        }
        const tasks = await TaskModel.find({createdBy: req.user.id});
        return res.redirect("/api/allTasks");
    } catch (error) {
        return res.json({message:"Error while updation", error:error.message});
    }
}

// Update Single Task
export async function handleUpdateView(req, res){
    try {
        const task = await TaskModel.findById(req.params.id)
        if(!task) return res.json({message:"No task found"});
        return res.render("taskUpdate",{task, user: req.user})
    } catch (error) {
        return res.json({message:"Something went wrong while fetching the task."})
    }
}

// Delete View
export async function handleDeleteView(req, res){
    try {
        const task = await TaskModel.findById(req.params.id)
        if(!task) return res.json({message:"No task found"});
        return res.render("deleteTask",{task, user:req.user})
    } catch (error) {
        return res.json({message:"Something went wrong while fetching the task."})
    }
}

// Delete Single Task
export async function handleTaskDeletion(req, res){
    try {
        const deletedTask = await TaskModel.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        const tasks = await TaskModel.find({createdBy:req.user.id});
        return res.redirect("/api/allTasks");
        
    } catch (error) {
        return res.status(500).json({ message: "Error while deleting", error: error.message });
    }
}
