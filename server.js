import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import dotenv from  'dotenv';
import postRoutes from './routes/posts.js';


//app config
const app = express();
dotenv.config();
const port = process.env.PORT || 8001;

//Middlewares
app.use(express.json())
app.use(Cors());
app.use('/tinder/cards',postRoutes);

//DB config
mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology: true,
})

//api endpoints
app.get('/',(req, res) => res.status(200).send('Hello'));

//listener
app.listen(port,()=>console.log(`listening on localhost:${port}`));




