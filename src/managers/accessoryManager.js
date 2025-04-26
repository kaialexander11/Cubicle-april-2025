const Accessory = require('../models/Accessory');
const accessoryManager = require('../managers/accessoryManager.js');

//exports.create = (accessoryData) => console.log(accessoryData);

exports.create = (accessoryData) => Accessory.create(accessoryData);