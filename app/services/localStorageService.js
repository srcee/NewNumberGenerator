genApp.service('localStorageService', ['nameOfDataInLSConstant', function (nameOfDataInLSConstant) {

    function setGenerators(value) {
        localStorage.setItem(nameOfDataInLocalStorageConstant, JSON.stringify(value));
    };

    function getGenerators() {
        if (localStorage.hasOwnProperty(nameOfDataInLocalStorageConstant)) {
            return JSON.parse(localStorage[nameOfDataInLocalStorageConstant]);;
        } else {
            return [];
        }
    };


    return {
        getGenerators: getGenerators,
        setGenerators: setGenerators,
    }
}]);