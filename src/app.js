const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('./swagger.json');

require('dotenv-safe').config();
const db = require("./database/mongoConfig")


const placesRoutes = require("./routes/placesRoutes")

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc));

app.use(cors())
app.use(express.json())
app.use("/places", placesRoutes);

db.connect()

module.exports = app
