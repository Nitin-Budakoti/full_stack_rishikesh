import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();   
const app = express();
app.use(express.json());        
app.use(cors());
app.use(express.urlencoded({extended:true}));
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGO_DB_CONNECTION_URL as string);


app.get('/api/hotel', (req, res) => {
    res.send("");
});

app.listen(7000,()=>{console.log("server is running on port 7000")});   
