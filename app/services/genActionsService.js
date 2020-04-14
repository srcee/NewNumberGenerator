genApp.service('genActionsService', [
    'genFactory',
    'localStorageService',
    'detailsViewsConstant',
    function (
        genFactory,
        localStorageService,
        detailsViewsConstant,
    ) {
        var allLocalStorage = localStorageService.getGenerators();
        var allGenerators = [];

        if (allLocalStorage.length > 0) {
            allLocalStorage.map(gen => {
                let list = gen.listOfNumbers;
                let newGen = genFactory.createGenerator(gen.name, gen.count, gen.color);
                newGen.listOfNumbers = list;
                newGen.isWorking = gen.isWorking;
                newGen.isHidden = gen.isHidden;

                if (newGen.isWorking === true) {
                    newGen.start();
                }
                allGenerators.push(newGen);
            });
        };



        window.onbeforeunload = function () {
            localStorageService.setGenerators(allGenerators);
        };

        var displayType = detailsViewsConstant.byTimeOfGeneration;
        var sortNumbersByObj =
        {
            byTimeOfGeneration: (arr) => arr.sort((a, b) => a.timeOfGeneration - b.timeOfGeneration),
            byValueAsc: (arr) => arr.sort((a, b) => a.value - b.value),
            byPeriod: () => { return },
            random: (arr) => arr.sort((a, b) => a.timeOfGeneration - b.timeOfGeneration)
        };
        var filterObj =
        {
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
            window.confirm(`Are you sure you want to delete this number? (${currentGenerator.listOfNumbers[idx].value})`)
            currentGenerator.listOfNumbers.splice(idx, 1);
            if (!currentGenerator.interval) {
                currentGenerator.start();
            }
        };


        return {
            hasHiddenGeneratorsChecker: hasHiddenGeneratorsChecker,
            hideGen: hideGen,
            createNewGenerator: createNewGenerator,
            showGen: showGen,
            deleteNumber: deleteNumber,
            allGenerators: allGenerators,
            sortNumbersByObj: sortNumbersByObj,
            filterObj: filterObj,
            displayType: displayType
        }
    }])