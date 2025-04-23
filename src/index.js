// console.log('Hello from Express!');

const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const expressConfig = require('./config/expressConfig.js');
const handlebarsConfig = require('./config/handlebarsConfig.js');
const homeController = require('./controllers/homeController.js');

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

// app.get('/', homeController.getHome);

// require('./config/expressConfig')(app); => valid as the line above!

// Express config (CSS and IMAGES):
//app.use(express.static(path.resolve(__dirname, 'public'))); => WORKS as the line below!!!
//app.use(express.static(path.resolve(__dirname, 'public')));


app.use(homeController);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));