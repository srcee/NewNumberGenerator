genApp.factory('genActionsService', ['genFactory', function (genFactory) {

    var generatorsArr = []; // List of all generators created.
    var hasHiddenGenerators = false;

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
    function hasHiddenGeneratorsChecker() {
        return hasHiddenGenerators;
    }
    // Hides certain generator from the list.
    function hideGen(idx) {
        generatorsArr[idx].isHidden = true;
        hasHiddenGenerators = true;
    }
    // Unhides all hidden generators.
    function showGen() {
        generatorsArr.map((gen) => gen.isHidden = false);
        hasHiddenGenerators = false;
    }

    // Generates random color.
    function randomRgbColor() {
        function r() { return Math.floor(Math.random() * 255) }
        return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
    }


    return {
        createGenerator: createGenerator,
        getGenerators: getGenerators,
        getGeneratorsById: getGeneratorsById,
        hasHiddenGeneratorsChecker: hasHiddenGeneratorsChecker,
        hideGen: hideGen,
        showGen: showGen
    }
}])