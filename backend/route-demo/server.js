const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// route utama
app.get("/", (req, res) => {
    res.send("Welcome to Route Handling!");
});

// route about
app.get("/about", (req, res) => {
    res.send("<h1>About Us</h1>");
});

// dynamic route
app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Viewing Product ID: ${id}`);
});

// query string
app.get("/search", (req, res) => {
    const term = req.query.q;
    res.send(`Searching for: ${term}`);
});

// 404 handler
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});