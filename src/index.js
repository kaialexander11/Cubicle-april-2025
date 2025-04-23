// console.log('Hello from Express!');

const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const expressConfig = require('./config/expressConfig.js');
const handlebarsConfig = require('./config/handlebarsConfig.js');

const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

// require('./config/expressConfig')(app); => valid as the line above!

// Express config (CSS and IMAGES):
//app.use(express.static(path.resolve(__dirname, 'public'))); => WORKS as the line below!!!
//app.use(express.static(path.resolve(__dirname, 'public')));




// Routes
app.get('/', (req, res) => {
    //res.send('Hello from Express!');
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));