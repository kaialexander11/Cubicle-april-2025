const router = require('express').Router();

const accessoryManager = require('../managers/accessoryManager.js');

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {

    //const body = req.body;
    const { name, description, imageUrl } = req.body;
    //console.log(body);

    // TODO: add accessory data to db:

    await accessoryManager.create({ name, description, imageUrl });

    res.redirect('/');
    
});

module.exports = router;