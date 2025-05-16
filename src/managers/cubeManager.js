const Cube = require('../models/Cube.js');


exports.getAll = async ( search, from, to ) => {
    //let result = cubes.slice();
    let result = await Cube.find().lean();

    // TODO: Use mongoose to filter in the db

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;

};

//exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.getOne = (cubeId) => Cube.findById(cubeId);

exports.getOneWithAccessories = (cubeId) => this.getOne(cubeId).populate('accessories');

//exports.getOneLean = (cubeId) => this.getOne(cubeId).lean();

exports.create = async (cubeData) => {

    const cube = new Cube(cubeData);

    //await cube.save();

    return cube.save();

};

exports.update = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData);

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.attachAccessory = async (cubeId, accessoryId) => {

    //return Cube.findByIdAndUpdate(cubeId, {$push: {accessories: accessoryId}});

    const cube = await Cube.findById(cubeId);

    cube.accessories.push(accessoryId);

    return cube.save();

};