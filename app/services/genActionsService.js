genApp.service('genActionsService', ['genFactory', function (genFactory) {

    var generatorsArr = []; // List of all generators created.
    var displayType = 'normal';
    var hasHiddenGenerators = false;
    var sortNumbersByObj =
    {
        normal: (arr) => arr.sort((a, b) => a.timeOfGeneration - b.timeOfGeneration),
        sorted: (arr) => arr.sort((a, b) => a.value - b.value),
        filtered: () => { return },
        random: () => { return }
    }

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

    function deleteNumber(idx, currentGenerator) {
        window.confirm(`Are you sure you want to delete this number? (${currentGenerator.listOfNumbers[idx].value})`)
        currentGenerator.listOfNumbers.splice(idx, 1);
    };



    return {
        hasHiddenGeneratorsChecker: hasHiddenGeneratorsChecker,
        hideGen: hideGen,
        createGenerator: createGenerator,
        getGenerators: getGenerators,
        getGeneratorsById: getGeneratorsById,
        showGen: showGen,
        deleteNumber: deleteNumber,
        sortNumbersByObj: sortNumbersByObj,
        displayType: displayType
    }
}])