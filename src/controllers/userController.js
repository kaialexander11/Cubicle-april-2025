const router = require('express').Router();
const userManager = require('../managers/userManager.js');
//const jwt = require('../lib/jwt');

const { extractErrorMessages } = require('../utils/errorHelpers.js');


router.get('/register', (req, res) => {
    res.render('users/register');
});

router.post('/register', async (req, res) => {

    const { username, password, repeatPassword } = req.body;

    //console.log(req.body);

    try {
        await userManager.register({ username, password, repeatPassword });
        //res.cookie('auth', token, { httpOnly: true });
        res.redirect('/users/login');
    } catch (err) {
        //console.log(err);
        // res.status(400).send(err.message);

        //console.log(err);
        //const firstErrorMessage = Object.values(err.errors)[0].message;
        //const errorMessages = Object.values(err.errors).map(x => x.message);
        //console.log(Object.values(err.errors)[0]);

        const errorMessages = extractErrorMessages(err);
        res.status(400).render('users/register', { errorMessages });

    }
    
});

router.get('/login', (req, res) => {
    res.render('users/login');
});

router.post('/login', async (req, res) => {

    const { username, password } = req.body;
    
    const token = await userManager.login(username, password);

    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/');

});

router.get('/logout', (req, res) => {

    res.clearCookie('auth');
    res.redirect('/');
    
});


module.exports = router;