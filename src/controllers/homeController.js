const router = require('express').Router();
const cubeManager = require('../managers/cubeManager.js');

router.get('/', async (req, res) => {
    //res.send('Hello from Express!');
    //console.log(req.query);

    const { search, from, to } = req.query; 

    const cubes = await cubeManager.getAll(search, from, to);

    res.render('index', { cubes, search, from, to });

});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;
