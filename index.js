const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const rodsRouter = require("./routes/api/rods")
const siliconesRouter = require("./routes/api/silicones")
const reelsRouter = require("./routes/api/reels")

dotenv.config();

const app = express();

app.use(cors());
// app.use(express.json());
app.use("/api/rods", rodsRouter);
app.use("/api/reels", reelsRouter);
app.use("/api/silicones", siliconesRouter);



app.use((req, res) => {
    res.status(404).json({
        message: "Not found",
    })
})

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({
        message,
    })
})

module.exports = app;

