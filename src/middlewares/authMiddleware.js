const jwt = require('../lib/jwt.js');
const { SECRET } = require('../config/config.js');


exports.auth = async (req, res, next) => {

    const token = req.cookies['auth'];

    if (token) {

        // validate token:
        
        try {
            
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken;
            res.locals.user = decodedToken; 
            res.locals.isAuthenticated = true;

            next();

        } catch(err) {

            res.clearCookie('auth');

            res.redirect('/users/login');

        }

    } else {

        next();

    }
};

exports.isAuth = (req, res, next) => {

    if (!req.user) {
        return res.redirect('/users/login');
    }
        
    next();
};
