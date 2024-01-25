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



// GET - List all mentors
app.get("/mentors", (req, res) => {
    res.json(mentors);
});

// GET - Details of a specific mentors by name
app.get("/mentors/:name", (req, res) => {
    const mentor = mentors.find((c) => c.name === req.params.name);
    if (!mentor) {
        res.status(404).send("Mentor not found");
    } else {
        res.json(mentor);
    }
});

// POST - Create a new mentors
app.post("/mentors", (req, res) => {
    mentors.push(req.body);
    res.send("Mentor added");
});

// PUT - Modify information of a mentors
app.put("/mentors/:name", (req, res) => {
    const index = mentors.findIndex(
        (c) => c.name === req.params.name
    );
    if (index === -1) {
        res.status(404).send("Mentor not found");
    } else {
        mentors[index] = { ...mentors[index], ...req.body };
        res.send("Mentor updated");
    }
});

// PATCH - Update partial information of a mentors
app.patch("/mentors/:name", (req, res) => {
    const index = mentors.findIndex(
        (c) => c.name === req.params.name
    );
    if (index === -1) {
        res.status(404).send("Mentor not found");
    } else {
        const courseToUpdate = mentors[index];
        // Update specific fields if they exist in the request body
        if (req.body.name) courseToUpdate.name = req.body.name;
        if (req.body.university) courseToUpdate.university = req.body.university;
        if (req.body.experince) courseToUpdate.experince = req.body.experince;

        res.send("Mentor partially updated");
    }
});

// DELETE - Remove a mentor by name
app.delete("/mentors/:name", (req, res) => {
    const index = mentors.findIndex(
        (c) => c.name === req.params.name
    );
    if (index === -1) {
        res.status(404).send("Mentor not found");
    } else {
        mentors.splice(index, 1);
        res.send("Mentor deleted");
    }
});

app.get("/*", (req, res) => {
    res.send("You are on worng route. Here's the list of possible routes");
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});