import 'dotenv/config';
import express from "express"
import {dbConnect} from "./config.js"
import path from "path"
import cookieParser from 'cookie-parser';
import methodOverride from "method-override"
import staticRoute from "./routes/staticRoute.js"
import route from "./routes/route.js"
import userRoute from './routes/userRoute.js';
import { checkForUserAuthentication } from './middleware/authenticate.js';

const app = express()

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride("_method"))
app.use(cookieParser())

app.use('/', staticRoute)
app.use('/user', userRoute)
app.use('/api', route)

const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`App running on port: ${port}`))
dbConnect(process.env.MONGO_URL)
.then(()=> console.log("Mongodb Connected"))
.catch((err)=>console.log(err))