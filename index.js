import 'dotenv/config';
import express from "express"
import {dbConnect} from "./config.js"
import path from "path"
import staticRoute from "./routes/staticRoute.js"
import route from "./routes/route.js"

const app = express()

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', staticRoute)
app.use('/task', route)

const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`App running on port: ${port}`))
dbConnect(process.env.MONGO_URL)
.then(()=> console.log("Mongodb Connected"))
.catch((err)=>console.log(err))