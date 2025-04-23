const cubes = [];

//exports.create = (name, description, difficultyLevel, imageUrl);

exports.getAll = () => cubes.slice();


exports.create = (cubeData) => {
    //cubes.push(cubeData);

    const newCube = {
        id: cubes.length + 1,
        ...cubeData,
    }

    cubes.push(newCube);

    return newCube;

};