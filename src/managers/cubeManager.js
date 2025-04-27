const Cube = require('../models/Cube.js');

//const uniqid = require('uniqid');

//const db = require('../db.json');
//exports.create = (name, description, difficultyLevel, imageUrl);

// const cubes = [
//     {
//         id: '1442imhkkm9u5gide',
//         name: 'Mirror Cube',
//         description: 'Very rare and powerful cube.',
//         imageUrl: 'https://m.media-amazon.com/images/I/71UW7JFigHL.jpg',
//         difficultyLevel: 4
//     },
//     {
//         id: '1432ighkkh9u5gide',
//         name: 'Lemarchands Cube',
//         description: 'Unlimited Force Cube.',
//         imageUrl: 'https://content.propstore.com/auction/hellraiser/listings2/88565/img01.jpg',
//         difficultyLevel: 5
//     },
// ];

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

//exports.getOneLean = (cubeId) => this.getOne(cubeId).lean();

exports.create = async (cubeData) => {

    const cube = new Cube(cubeData);

    await cube.save();

    return cube;
};

exports.attachAccessory = async (cubeId, accessoryId) => {
    //return Cube.findByIdAndUpdate(cubeId, {$push: {accessories: accessoryId}});

    const cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);

    return cube.save();

};