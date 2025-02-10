import mongoose, { Model, Schema } from "mongoose"

const taskSchema = new Schema({
    taskName:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    status:{
        type: Boolean,   
        require: true,
        default: false
    }
}, {timestamps: true})

export const TaskModel = mongoose.model("Task", taskSchema)
