// server.js

// Add your code here
import express from 'express';

const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
    res.send("home page.")
})

// Route with username parameter
app.get('/user/:username', (req, res) => {
    const username = req.params.username; // Extracting the username from the request
    res.send(`Hello ${username}`); // Personalizing the response
});

app.use((req, res) => {
    res.status(400).send("404 - Not Found");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})