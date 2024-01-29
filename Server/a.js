import express  from "express";
import mongoose from "mongoose";

const app=express()
app.use(express.json())

const uri = "mongodb+srv://user_01:4pQFgKNoL5LGS5rr@cluster0.2aepu2v.mongodb.net/?retryWrites=true&w=majority/Students";
mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const StudentSchema = new mongoose.Schema({
    uid:{
        type:Number,
        required:true,
        unique:true,
    },
    sem1:{
        type:Number,
        required:true,
        
    },
    sem2:{
        type:Number,
        required:true,
        
    },
    cgpa:{
        type:Number,
        required:true,
       
    },
});

const StudentDocument = mongoose.model("StudentCgpa", StudentSchema,"StudentCgpa");

app.get("/students",async(req,res)=>{
    try{
        const data=await StudentDocument.find()
        res.json(data)
    }
    catch(error){
        res.status(500).send(error)

    }
})

// Start the server
const port=8000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});