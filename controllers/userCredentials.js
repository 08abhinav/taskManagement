import {User} from "../models/user.js"

export const handleUserSignup = async(req, res)=>{
    try {
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.json({message: "All fields are required"})
        }
        await User.create({
            fullName, 
            email,
            password
        })
        return res.redirect('/login')
    } catch (error) {
        return res.json({message: "Something went wrong while sign up", error:error.message})
    }
}


export const handleUserSiginin = async(req, res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.json({message:"All fields are required"})
        }
        const user = await User.matchUserPasswordAndGenerateToken(email, password)
        return res.cookie("user", user).redirect('/dashboard')
    } catch (error) {
        return res.json({message: "Something went wrong while user sign in", err: error.message})
    }
}

export const handleUserSignout = (req, res)=>{
    return res.clearCookie("user").redirect('/')
}