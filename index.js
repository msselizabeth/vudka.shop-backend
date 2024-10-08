const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRouter = require("./routes/api/auth")
const cartRouter = require("./routes/api/cart")
const rodsRouter = require("./routes/api/rods")
const siliconesRouter = require("./routes/api/silicones")
const reelsRouter = require("./routes/api/reels")
const hooksRouter = require("./routes/api/hooks")
const linesRouter = require("./routes/api/lines");
const snapsswivelsRouter = require("./routes/api/snapsswivels")
const beadsbuffersRouter = require("./routes/api/beadsbuffers")
const stopersRouter = require("./routes/api/stopers")
const antitanglesRouter = require("./routes/api/antitangles")
const rigsleadersRouter = require("./routes/api/rigsleaders");
const jigheadsRouter = require("./routes/api/jigheads");
const leadsfeedersRouter = require("./routes/api/leadsfeeders");

const exchangeRouter = require("./routes/api/exchange");
const adminAuthRouter = require("./routes/api/adminAuth");
const adminRodsRouter = require("./routes/api/adminRods");
const stockEntryRouter = require("./routes/api/stockEntry");
const productsRouter = require("./routes/api/products");


dotenv.config();

const app = express();

app.use(cors());

app.use("/api/exchange", exchangeRouter);
app.use("/api/admin-auth", adminAuthRouter);
app.use("/api/admin-rods", adminRodsRouter);
app.use("/api/stock-entry", stockEntryRouter);
app.use("/api/products", productsRouter);
// app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/cart", cartRouter);
app.use("/api/rods", rodsRouter);
app.use("/api/reels", reelsRouter);
app.use("/api/silicones", siliconesRouter);
app.use("/api/hooks", hooksRouter);
app.use("/api/lines", linesRouter);
// app.use("/api/snapsswivels", snapsswivelsRouter);
// app.use("/api/beadsbuffers", beadsbuffersRouter);
// app.uae("/api/stopers", stopersRouter);
// app.use("./api/antitangles", antitanglesRouter);
// app.use("./api/rigsleaders", rigsleadersRouter);
// app.use("./api/jigheads", jigheadsRouter);
// app.use("./api/leadsfeeders", leadsfeedersRouter);



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

