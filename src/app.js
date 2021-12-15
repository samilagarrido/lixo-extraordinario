const express = require('express');
const cors = require('cors');
const  swaggerUi  =  require('swagger-ui-express')  
const  swaggerDocument  =  require('./swagger.json')

const db = require("./database/mongoConfig")
const app = express()

const placesRoutes = require("./routes/placesRoutes")
require('dotenv-safe').config();

db.connect()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors())
app.use(express.json())
app.use("/places", placesRoutes);


module.exports = app
