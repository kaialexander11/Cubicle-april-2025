const uniqid = require('uniqid');
//const db = require('../db.json');
//exports.create = (name, description, difficultyLevel, imageUrl);

const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {
    //cubes.push(cubeData);
    const newCube = {
        id: uniqid(),
        ...cubeData,
    }

    cubes.push(newCube);

    return newCube;

};