import express from 'express'
import colors from 'colors'
import morgan from 'morgan'
import cors from 'cors'

// import dotenv from 'dotenv'
import { mongodbconnection } from './db.js'
// dotenv.config(
//     { path: './env' } // Specify the path to your.env file
// )


const app = express()

app.use(express.json())
// using cors

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true // Allow credentials (if needed)
}));

// middleware for logging requests

app.use(morgan('tiny'))
// app.use(morgan('dev'))


// routes
import userRoutes from './routes/userRoutes.js'

app.use('/api/v1/users',userRoutes)
app.get('/',(req,res)=>{
    res.send('Hello World')
})



console.log()

mongodbconnection()
const PORT=process.env.PORT ||8808
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`.bgMagenta)
})