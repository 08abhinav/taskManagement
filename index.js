import express from "express"
import {PORT, dbConnect} from "./config.js"
import path from "path"
import staticRoute from "./routes/staticRoute.js"

const app = express()

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', staticRoute)

app.listen(PORT, ()=>console.log(`App running on port: ${PORT}`))
dbConnect("mongodb://127.0.0.1:27017/taskManagement")
.then(()=> console.log("Mongodb Connected"))
.catch((err)=>console.log(err))