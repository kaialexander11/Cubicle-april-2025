const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');
const accessoryController = require('./controllers/accessoryController.js');

router.use(homeController);
router.use('/cubes', cubeController);
router.use('/accessories', accessoryController);

// Doesn't work here! WHY???
// router.get('*', (req, res) => {
//     res.redirect('/404');
// });

router.use((req, res, next) => {
    res.status(404).send("Sorry can't find that!")
});

module.exports = router;