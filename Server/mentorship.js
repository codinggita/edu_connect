import express from "express";
const app = express();
const port = 8000;

app.use(express.json());

const mentors = [{
    name: "Akshay",
    experince: 2,
    university: "GTU",
    ratings: 3,

}, {
    name: "Manish",
    experince: 2,
    university: "LPU",
    ratings: 2,

}, {
    name: "Aradhya",
    experince: 4,
    university: "VIT",
    ratings: 4,

}, {
    name: "John",
    experince: 4,
    university: "CU",
    ratings: 3,

}, {
    name: "Tom",
    experince: 3,
    university: "LPU",
    ratings: 1,

}]



app.get("/mentors", (req, res) => {
    res.json(mentors);
});

app.get("/mentors/:name", (req, res) => {
    const mentors = mentors.find((c) => c.name === req.params.name);
    if (!mentors) {
        res.status(404).send("Mentor not found");
    } else {
        res.json(mentors);
    }
});

app.post("/mentors", (req, res) => {
    profile.push(req.body);
    res.send("Mentor added");
});




app.get("/*", (req, res) => {
    res.send("You are on worng route. Here's the list of possible routes");
});


// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});