const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = (userData) => User.create(userData);

exports.login = async (username, password) => {
    // TODO: Find user
    const user = await User.findOne({ username });

    if (!user) {
        throw new Error('Cannot find username or password!');
    }

    // TODO: Validate password:

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw new Error('Cannot find username or password!');
    }

    // TODO: return user:

    return user;

};