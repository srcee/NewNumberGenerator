genApp.service('localStorageService', ['nameOfDataInLSConstant', function (nameOfDataInLSConstant) {

    function setGenerators(value) {
        localStorage.setItem(nameOfDataInLSConstant, JSON.stringify(value));
    };

    function getGenerators() {
        if (localStorage.hasOwnProperty(nameOfDataInLSConstant)) {
            return JSON.parse(localStorage[nameOfDataInLSConstant]);;
        } else {
            return [];
        }
    };


    return {
        getGenerators: getGenerators,
        setGenerators: setGenerators,
    }
}]);