 // modern way of node to import rather than require
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express ();
app.use (bodyParser.json({ limit: "300mb", extended:true}));
app.use (bodyParser.urlencoded({ limit: "300mb", extended:true}));
app.use(cors());  

const CONNECTION_URL = 'mongodb+srv://Atreya2022:Atreya2022@cluster0.jdjuv.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true , useUnifiedTopology : true})
.then (()=> app.listen(PORT,() => console.log(`Server running on port: ${PORT} `)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify' ,false)
