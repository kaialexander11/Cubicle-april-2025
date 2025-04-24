const uniqid = require('uniqid');
//const db = require('../db.json');
//exports.create = (name, description, difficultyLevel, imageUrl);

const cubes = [
    {
        id: '1442imhkkm9u5gide',
        name: 'Mirror Cube',
        description: 'Very rare and powerful cube.',
        imageUrl: 'https://m.media-amazon.com/images/I/71UW7JFigHL.jpg',
        difficultyLevel: 4
    },
    {
        id: '1432ighkkh9u5gide',
        name: 'Lemarchands Cube',
        description: 'Unlimited Force Cube.',
        imageUrl: 'https://content.propstore.com/auction/hellraiser/listings2/88565/img01.jpg',
        difficultyLevel: 5
    },
];

exports.getAll = ( search, from, to ) => {
    let result = cubes.slice();

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

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    //cubes.push(cubeData);
    const newCube = {
        id: uniqid(),
        ...cubeData,
    }

    cubes.push(newCube);

    return newCube;

};