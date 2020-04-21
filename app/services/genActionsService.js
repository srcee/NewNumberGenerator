genApp.service('genActionsService', [
    'genFactory',
    'localStorageService',
    function (
        genFactory,
        localStorageService
    ) {

        var allLocalStorage = localStorageService.getGenerators();
        var allGenerators = [];
        const sortNumbersByObj = {
            byTimeOfGeneration: (arr) => arr.sort((a, b) => a.timeOfGeneration - b.timeOfGeneration),
            byValueAsc: (arr) => arr.sort((a, b) => a.value - b.value),
            byPeriod: () => { return },
            random: (arr) => arr.sort((a, b) => a.timeOfGeneration - b.timeOfGeneration)
        };

        if (allLocalStorage.length > 0) {
            allLocalStorage.map(gen => {
                let newGen = genFactory.createGenerator(gen.name, gen.count, gen.color);
                newGen.listOfNumbers = gen.listOfNumbers;
                newGen.isWorking = gen.isWorking;
                newGen.isHidden = gen.isHidden;
                newGen.randomizer = gen.randomizer;
                newGen.timeOfCreation = gen.timeOfCreation;

                if (newGen.isWorking === true) {
                    newGen.start();
                }

                allGenerators.push(newGen);
            });
        };

        function createNewGenerator(name, count) {
            let color = randomRgbColor();
            let newGen = genFactory.createGenerator(name, count, color);
            newGen.start();
            allGenerators.push(newGen);
        };

        function hasHiddenGeneratorsChecker() {
            let hasHiddenGenerators = allGenerators.findIndex((item) => item.isHidden === true);
            return hasHiddenGenerators === -1 ? false : true;
        };

        // Hides certain generator from the list.
        function hideGen(idx) {
            allGenerators[idx].isHidden = true;
        };

        // Unhides all hidden generators.
        function showGen() {
            allGenerators.map((gen) => gen.isHidden = false);
        };

        // Generates random color.
        function randomRgbColor() {
            function r() { return Math.floor(Math.random() * 255) }
            return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
        };

        function deleteNumber(idx, currentGenerator) {
            currentGenerator.listOfNumbers.splice(idx, 1);
            if (!currentGenerator.randomizer) {
                currentGenerator.start();
            }
        };

        function deleteGenerator(idx) {
            allGenerators.splice(idx, 1);
        };

        function getAllGenerators() {
            return allGenerators;
        }

        window.addEventListener('beforeunload', function () {
            localStorageService.setGenerators(allGenerators);
        });

        return {
            hasHiddenGeneratorsChecker: hasHiddenGeneratorsChecker,
            hideGen: hideGen,
            createNewGenerator: createNewGenerator,
            showGen: showGen,
            deleteNumber: deleteNumber,
            deleteGenerator: deleteGenerator,
            getAllGenerators: getAllGenerators,
            sortNumbersByObj: sortNumbersByObj,
        }
    }])