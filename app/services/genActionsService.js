genApp.factory('genActionsService', ['genFactory', function (genFactory) {

    var generatorsArr = []; // List of all generators created.


    function createGenerator(name, count) {
        let color = randomRgbColor();
        let newGen = genFactory.create(name, count, color);
        newGen.start();
        generatorsArr.push(newGen);
    }

    function getGenerators() {
        return generatorsArr;
    }
    function getGeneratorsById(idx) {
        return generatorsArr[idx];
    }

    // Generates random color.
    function randomRgbColor() {
        function r() { return Math.floor(Math.random() * 255) }
        return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
    }


    return {
        createGenerator: createGenerator,
        getGenerators: getGenerators,
        getGeneratorsById: getGeneratorsById
    }
}])