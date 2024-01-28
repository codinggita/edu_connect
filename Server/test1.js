import express  from "express";
const app=express()
app.use(express.json())

const students=[{
    uid:1,
    sem1:7,
    sem2:7.5,
    cgpa:7.25,

},{
    uid:2,
    sem1:8,
    sem2:7.5,
    cgpa:7.75,

},{
    uid:3,
    sem1:7,
    sem2:7,
    cgpa:7,

},{
    uid:4,
    sem1:8,
    sem2:7,
    cgpa:7.5,

},]

app.get("/students",(req,res)=>{
    res.json(students)
})

app.post("/students",(req,res)=>{
    students.push(req.body);
    res.send("Student added")
})

app.put("/students/:uid",(req,res)=>{
    const index=students.findIndex((c)=>c.uid===req.params.uid)
    if(index===-1){
        res.status(404).send("No student found")
    }
    else{
        students[index]={...students[index],...req.body}
        res.send("Student deatils updated")
    }

})

app.patch("students/v1/:uid",(req,res)=>{
    const index=students.findIndex((c)=>c.uid===req.params.uid)
    if(index===-1){
        res.status(404).send("No student found")
    }
    else{
        const studentToUpdate=students[index]
        if(req.body.uid) studentToUpdate.uid=req.body.uid;
        if(req.body.sem1) studentToUpdate.sem1=req.body.sem1;
        res.send("Student deatils partially updated")
    }
})

app.delete("/students/d1/:uid",(req,res)=>{
    const index=students.findIndex((c)=>c.uid===req.params.uid)
    if(index===-1){
        res.status(404).send("No student found")
    }
    else{
        students.splice(index,1)
        res.send("Student deleted")

    }
 
})

// Start the server
const port=8000;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
