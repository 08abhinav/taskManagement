import {TaskModel} from "../models/tasks.js"
export const handleHome = (req, res)=>{
    return res.render("home")
}

export const handleCreateTask = (req, res)=>{
    return res.render("taskCreate", {user: req.user})
}

export const handleLoginView = (req, res)=>{
    return res.render("userLogin")
}

export const handleSignupView = (req, res)=>{
    return res.render("userSignup")
}

export const handleUserDashboard = async(req, res)=>{
    try {
        const user = req.user.id;

        const totalTasks = await Task.countDocuments({ user });
        const pendingTasks = await Task.countDocuments({ user, status: false });
        const completedTasks = await Task.countDocuments({ user, status: true });

        return res.render("userHome", {user: req.user,
            totalTasks,
            pendingTasks,
            completedTasks
        })        
        
    } catch (error) {
        return res.message({error:error.message})
    }
}