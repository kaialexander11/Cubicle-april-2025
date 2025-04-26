const Accessory = require('../models/Accessory');

//exports.create = (accessoryData) => console.log(accessoryData);

exports.create = (accessoryData) => Accessory.create(accessoryData);