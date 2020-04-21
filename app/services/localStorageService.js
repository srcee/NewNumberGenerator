genApp.service('localStorageService', ['nameOfDataInLSConstant', function (nameOfDataInLSConstant) {

    function setGenerators(generators) {
        localStorage.setItem(nameOfDataInLSConstant.genAppGeneratorsStorage, JSON.stringify(generators));
    };

    function getGenerators() {
        if (nameOfDataInLSConstant.genAppGeneratorsStorage in localStorage) {
            return JSON.parse(localStorage[nameOfDataInLSConstant.genAppGeneratorsStorage]);;
        } else {
            return [];
        }
    };


    return {
        getGenerators: getGenerators,
        setGenerators: setGenerators,
    }
}]);