const express = require('express');
const mongoose = require('mongoose');


const expressConfig = require('./config/expressConfig.js');
const handlebarsConfig = require('./config/handlebarsConfig.js');
const dbConnect = require('./config/dbConfig.js');
const routes = require('./routes.js');

const app = express();

const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

dbConnect()
    .then(() => console.log('DB Connected successfully!'))
    .catch(err => {
        console.log('DB error: ', err.message);
    });

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));

