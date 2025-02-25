import mongoose, { Schema } from "mongoose"

const taskSchema = new Schema({
    taskName:{
        type: String,
        require: true,
        trim: true
    },
    description:{
        type: String,
        require: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status:{
        type: Boolean,   
        require: true,
        default: false
    }
}, {timestamps: true})

export const TaskModel = mongoose.model("Task", taskSchema)
