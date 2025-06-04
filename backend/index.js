import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import recipeRoute from './routes/recipeRoute.js';

dotenv.config();


const app = express();
app.use(cors());
app.use('/api/recipes', recipeRoute);

app.listen(3000, ()=>{
    console.log("Server is running at port 3000!");
})