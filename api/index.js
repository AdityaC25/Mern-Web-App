import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js';
import { error } from 'console';
import { measureMemory } from 'vm';

dotenv.config();


mongoose.connect(process.env.MONGODB_URI).then(
    () =>{
        console.log('mongodb is connected!');
    }
).catch((err) =>{
    console.log(err);
})


const PORT = process.env.PORT || 3000



const app = express();

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Server is runnig on Port ${PORT} !!`);
})

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!'
    res.status(statusCode).json(
        {
            success:false,
            statusCode,
            message
        }
    )
})

