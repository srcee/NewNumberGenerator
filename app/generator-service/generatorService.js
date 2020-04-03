'use strict';

let generatorsArr = [];

class NumberGenerator {
    listOfNumbers = [];
    constructor(name, color, count) {
        this.name = name;
        this.color = color;
        this.count = count;
    }

    // Method that starts the number generator
    start() {
        let generator = setInterval(() => {
            if (this.listOfNumbers.length < this.count) {
                this.listOfNumbers.push(Math.floor(Math.random() * (101 - 1)) + 1);
            } else {
                clearInterval(generator);
            }
        }, 5000)
    }
}

// Service that creates new number generator
var generatorModule = angular.module('generatorModule', []);

generatorModule.factory('actions', [function () {

    function create(name, color, count) {
        let newGen = new NumberGenerator(name, color, count);
        newGen.start();
        return generatorsArr.push(newGen);
    }

    function getGenerators() {
        return generatorsArr;
    }

    return {
        create: create,
        getGenerators: getGenerators
    }
}]);
