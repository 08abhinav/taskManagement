import mongoose from "mongoose"

export const PORT = 8080;
export function dbConnect(url){
    return mongoose.connect(url)
}