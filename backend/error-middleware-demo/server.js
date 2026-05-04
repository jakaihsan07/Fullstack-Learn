const express = require("express");
const app = express();
const PORT = 3000;

// supaya bisa baca JSON
app.use(express.json());

// route normal
app.get("/success", (req, res) => {
    res.json({
        success: true,
        message: "Route berjalan normal"
    });
});

// route error (manual)
app.get("/error", (req, res, next) => {
    const error = new Error("Ini error sengaja dibuat!");
    next(error); // kirim ke error middleware
});

const errorHandler = require("./middleware/errorHandler");

app.use((req, res, next) => {
    const error = new Error("Route tidak ditemukan");
    error.status = 404;
    next(error);
});

app.use(errorHandler);

// start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});