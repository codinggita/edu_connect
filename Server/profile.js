import express from "express";
const app = express()
const port = 8000

app.use(express.json());

const profiles = [{
    name: "abc",
    semester: "firstyear",
    university: "LPU"

}, {
    name: "xyz",
    semester: "Secondyear",
    university: "LPU"

}, {
    name: "Abhay",
    semester: "firstyear",
    university: "VIT"

}, {
    name: "john",
    semester: "firstyear",
    university: "CU"

}, {
    name: "tom",
    semester: "thirdyear",
    university: "LPU"

}]



app.get("/profile", (req, res) => {
    res.json(profiles);
});

app.get("/profile/:name", (req, res) => {
    const profile = profiles.find((c) => c.name === req.params.name);
    if (!profile) {
        res.status(404).send("Profile not found");
    } else {
        res.json(profile);
    }
});

app.post("/profile", (req, res) => {
    profiles.push(req.body);
    res.send("Profile added");
});

app.put("/profile/:name", (req, res) => {
    const index = profiles.findIndex(
        (c) => c.name === req.params.name
    );
    if (index === -1) {
        res.status(404).send("Profile not found");
    } else {
        profiles[index] = { ...profiles[index], ...req.body };
        res.send("Profile updated");
    }
});

app.patch("/profile/:name", (req, res) => {
    const index = profiles.findIndex(
        (c) => c.name === req.params.name
    );
    if (index === -1) {
        res.status(404).send("Profile not found");
    } else {
        const profileToUpdate = profiles[index];
        // Update specific fields if they exist in the request body
        if (req.body.name) profileToUpdate.name = req.body.name;
        if (req.body.university) profileToUpdate.university = req.body.university;
        if (req.body.semester) profileToUpdate.semester = req.body.semester;

        res.send("Profile partially updated");
    }
});




app.get("/*", (req, res) => {
    res.send("You are on worng route. Here's the list of possible routes");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});