const uniqid = require('uniqid');

const cubes = [];

//exports.create = (name, description, difficultyLevel, imageUrl);

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