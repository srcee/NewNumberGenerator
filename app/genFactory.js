'use strict';


var generatorModule = angular.module('generatorModule', []);

generatorModule.factory('actions', ['$interval', function ($interval) {

    var generatorsArr = [];

    // TODO: Have to do refactoring so the setInterval process could be paused and stopped anytime
    class NumberGenerator {
        listOfNumbers = [];
        interval;
        color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16); //generates random color.
        constructor(name, count) {
            this.name = name;
            this.count = count;
        }

        // Method that starts to create new random number in every 5 sec.
        start() {
            this.interval = $interval(() => {
                return this.listOfNumbers.push(Math.floor(Math.random() * (101 - 1)) + 1);
            }, 5000, this.count);
        }
        pause() {
            $interval.cancel(this.interval);
            this.interval = undefined;
        }
        resume() {
            this.interval = $interval(() => {
                return this.listOfNumbers.push(Math.floor(Math.random() * (101 - 1)) + 1);
            }, 5000, this.count - this.listOfNumbers.length);
        }
    }

    // Function that creates new instance of NumberGenerator class.
    function create(name, color, count) {
        let newGen = new NumberGenerator(name, color, count);
        newGen.start();
        return generatorsArr.push(newGen); // Pushes the new generator in array.
    }
    function getGenerators() {
        return generatorsArr;
    }

    return {
        create: create,
        getGenerators: getGenerators
    }
}]);
