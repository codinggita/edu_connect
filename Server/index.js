const express = require("express")
const app = express()
const port = 8000

//schedule
let schedule={students:{ firstYear:"10 to 11",
                         secondYear:"9 to 11",
                         thirdYear:"9 to 11",
                         fourthYear:"9 to 11"},

            teachers:{junior:"9 to 12",
                      seniors:"10 to 12"}}

//courses      
let courses =[{course:"cse",course_id:1},
              {course:"aptitude",course_id:2},
              {course:"soft skills",course_id:3}]

//Welcome
app.get("/", (req, res) => {
    res.send(`Welcome users`);
     console.log(res);
});

//Students Schedule
app.get("/users/schedule/students/:id", (req, res) => {
    const id=parseInt(req.params.id)
    const schedule=id===1?schedule.students.firstYear:"9 to 11"

    res.send(schedule)
});

//Teachers Schedule
app.get("/users/schedule/teachers/:id", (req, res) => {
    const id=parseInt(req.params.id)
    const schedule=id===1?schedule.teachers.junior:"9 to 11"

    res.send(schedule)
});


//Course catalog
app.get("/:c_id", (req, res) => {
    const id = parseInt(req.params.c_id);
     console.log(req);
    res.send(`Course: ${courses[id-1].course}`);
});

//Starting server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})