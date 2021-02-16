'use strict';

const express = require('express');
const compression = require('compression');
const helmet = require('helmet');


const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./swagger.json');

const configs = require('./configs/config');

const port = configs.server.port;
const app = express();

app.use(helmet());
app.use(compression());

swaggerDocument.host = `localhost:${port}`;
// definition of api with swagger
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);



const db = require("./models");

// lets sync all the models
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });
const cors = require('cors');
app.use(cors());

// add routes
app.use(require('./routes'));



app.listen(port, () => {
    console.info(`Server listening on port ${port}`);
});