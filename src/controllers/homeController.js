const router = require('express').Router();
const cubeManager = require('../managers/cubeManager.js');

router.get('/', (req, res) => {
    //res.send('Hello from Express!');
    const cubes = cubeManager.getAll();


    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
