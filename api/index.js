import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js';

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

