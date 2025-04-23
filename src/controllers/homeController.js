const router = require('express').Router();

router.get('/', (req, res) => {
    //res.send('Hello from Express!');
    res.render('index');
});

// router.get('/about', (req, res) => {
//     res.render('about');
// });

module.exports = router;
