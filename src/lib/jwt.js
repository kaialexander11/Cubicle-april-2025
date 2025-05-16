const { promisify } = require('util');
const jsonwebtoken = require('jsonwebtoken');


//library:
const jwt = {

    sign: promisify(jsonwebtoken.sign),
    verify: promisify(jsonwebtoken.verify),
                                    
};

module.exports = jwt;



