'use strict';


var generatorModule = angular.module('generatorModule', []);

generatorModule.factory('actions', ['$interval', function ($interval) {

    var generatorsArr = []; // List of all generators created.

    class NumberGenerator {
        listOfNumbers = []; // List of the generated numbers.
        interval;
        isWorking; // Holds the current status of the generator.
        color = randomRgbColor();
        constructor(name, count) {
            this.name = name;
            this.count = count;
        }

        // Starts the generation of new random number every 5 sec.
        start() {
            this.isWorking = true;
            this.interval = $interval(() => {
                return this.listOfNumbers.push(Math.floor(Math.random() * (101 - 1)) + 1);
            }, 5000, this.count);
        }

        // Pauses the generation of numbers and subtract 'count' with the number of currently generated numbers.
        pause() {
            $interval.cancel(this.interval);
            this.interval = undefined;
            this.isWorking = false;
            this.count -= this.listOfNumbers.length;
        }
    }

    // Creates new instance of NumberGenerator class.
    function create(name, color, count) {
        let newGen = new NumberGenerator(name, color, count);
        newGen.start();
        return generatorsArr.push(newGen);
    }
    // Generates random color.
    function randomRgbColor() {
        function r() { return Math.floor(Math.random() * 255) }
        return 'rgb(' + r() + "," + r() + "," + r() + ')';
    }

    function getGenerators() {
        return generatorsArr;
    }

    return {
        create: create,
        getGenerators: getGenerators
    }
}]);
