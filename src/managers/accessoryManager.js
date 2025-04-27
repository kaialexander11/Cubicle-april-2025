const Accessory = require('../models/Accessory.js');

//const accessoryManager = require('../managers/accessoryManager.js');
//exports.create = (accessoryData) => console.log(accessoryData);

exports.getAll = () => Accessory.find();

exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getOthers = (accessoryIds) => Accessory.find({ _id: { $nin: accessories } });

//exports.getOthers = (accessoryIds) => Accessory.find({ _id: { $nin: accessories } });