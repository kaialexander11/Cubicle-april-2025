const { extractErrorMessages } = require('../utils/errorHelpers.js');

module.exports = (err, req, res, next) => {

    const errorMessages = extractErrorMessages(err);

    res.redirect('/404', { errorMessages });

} 