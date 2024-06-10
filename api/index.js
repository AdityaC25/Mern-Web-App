import express from 'express'


const PORT = process.env.PORT || 3000



const app = express();

app.listen(PORT, ()=>{
    console.log(`Server is runnig on Port ${PORT} !!`);
})

