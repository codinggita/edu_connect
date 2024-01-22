import express from "express";
const app = express()
const port = 8000

app.use(express.json());

//schedule
let schedule = {
    students: {
        firstYear: "10 to 11",
        secondYear: "9 to 11",
        thirdYear: "9 to 11",
        fourthYear: "9 to 11"
    },

    teachers: {
        junior: "9 to 12",
        seniors: "10 to 12"
    }
}

//Welcome
app.get("/", (req, res) => {
    res.send(`Welcome users`);
    console.log(res);
});

//Students Schedule
app.get("/schedule/students/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const schedule = id === 1 ? schedule.students.firstYear : "9 to 11"

    res.send(schedule)
});

//Teachers Schedule
app.get("/schedule/teachers/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const schedule = id === 1 ? schedule.teachers.junior : "9 to 11"

    res.send(schedule)
});

app.post("/schedule/students", (req, res) => {
    schedule.students.push(req.body);
    res.send("Schedule added");
});



//Starting server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})