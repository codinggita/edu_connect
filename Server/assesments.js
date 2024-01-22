import express from "express";
const app = express();
const port = 8000;

app.use(express.json());

const test = [{
    name: "Aptitude",
    test_id: 1,
    duration: "2 hrs",
    difficulty: "easy",


}, {
    name: "DSA",
    test_id: 2,
    duration: "2 hrs",
    difficulty: "medium"

}, {
    name: "OS",
    test_id: 3,
    duration: "1 hrs",
    difficulty: "medium"

}, {
    name: "Aptitude",
    test_id: 4,
    duration: "2 hrs",
    difficulty: "medium"

}, {
    name: "CN",
    test_id: 5,
    duration: "2 hrs",
    difficulty: "easy"

}, {
    name: "Aptitude",
    test_id: 6,
    duration: "2 hrs",
    difficulty: "difficulty"

},]

app.get("/tests", (req, res) => {
    res.json(test);
});

app.get("/tests/:name", (req, res) => {
    const tests = tests.find((c) => c.name === req.params.courseName);
    if (!tests) {
        res.status(404).send("Test not found");
    } else {
        res.json(tests);
    }
});

app.post("/tests", (req, res) => {
    test.push(req.body);
    res.send("Test added");
});



app.get("/*", (req, res) => {
    res.send("You are on worng route. Here's the list of possible routes");
});


// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});