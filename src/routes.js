const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');

router.use(homeController);
router.use('/cubes', cubeController);

// Doesn't work here! WHY???
// router.get('*', (req, res) => {
//     res.redirect('/404');
// });

module.exports = router;