const express = require('express');
const cors = require('cors');

require('dotenv-safe').config();
const db = require("./database/mongoConfig")


const placesRoutes = require("./routes/placesRoutes")

const app = express()

app.use(cors())
app.use(express.json())
app.use("/places", placesRoutes);

db.connect()

module.exports = app
