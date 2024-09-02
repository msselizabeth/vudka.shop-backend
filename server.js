const app = require("./index");
const mongoose = require("mongoose");
const { initializeModels } = require("./hand-data/models")

const { DB_HOST, PORT } = process.env;

mongoose.connect(DB_HOST)
    .then(async () => {
        // await initializeModels();
        app.listen(PORT)
        console.log("Connect success")
    })
    .catch(error => {
        console.log(error.message)
        process.exit(1);
    })
;
