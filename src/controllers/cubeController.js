const router = require('express').Router();

// Path is /cubes/create:

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    console.log(req.body);

    //res.send('Form submited');

    res.redirect('/');
});

module.exports = router;