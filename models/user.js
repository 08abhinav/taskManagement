import mongoose, { model,Schema } from "mongoose";
import bcrypt from "bcrypt"
import { createToken } from "../services/authorization.js";

const userSchema = new Schema({
    fullName:{
        type: String, 
        require: true
    },
    email:{
        type: String, 
        require: true,
        unique: true
    },
    password:{
        type: String, 
        require: true
    }
})

userSchema.pre("save", async function(next){
    const user = this;
    if(!user.isModified("password")) return next();

    const salt = 10;
    const hashedPassword = await bcrypt.hash(user.password, salt)

    user.password = hashedPassword;
    next();
})

userSchema.static("matchUserPasswordAndGenerateToken", async function(email, password){
    const user = await User.findOne({email})
    if(!user) throw new Error("Email not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) throw new Error("Incorrect email or password");

    const token = createToken(user)
    return token
})

export const User = new model("User", userSchema)
