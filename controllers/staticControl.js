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

export const handleUserDashboard = (req, res)=>{
    return res.render("userHome", {user: req.user})
}