// console.log('Hello from Express!');

const express = require('express');
const mongoose = require('mongoose');

//const handlebars = require('express-handlebars');
//const path = require('path');

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
        console.log('DB error: ', err);
    });


app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));



// app.get('/', homeController.getHome);

// require('./config/expressConfig')(app); => valid as the line above!

// Express config (CSS and IMAGES):
//app.use(express.static(path.resolve(__dirname, 'public'))); => WORKS as the line below!!!
//app.use(express.static(path.resolve(__dirname, 'public')));
