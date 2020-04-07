'use strict';


var generatorFactory = angular.module('generatorFactory', []);

generatorFactory.factory('genFactory', ['$interval', function ($interval) {

    class NumberGenerator {
        listOfNumbers = []; // List of the generated numbers.
        interval;
        isWorking; // Holds the current status of the generator.
        constructor(name, count, color) {
            this.name = name;
            this.count = count;
            this.color = color;
        }

        // Starts the generation of new random number every 5 sec.
        start() {
            this.isWorking = true;
            this.interval = $interval(() => {
                return this.listOfNumbers.push(Math.floor(Math.random() * 99) + 1);
            }, 5000, this.count);
        }

        // Pauses the generation of numbers and subtract 'count' with the number of currently generated numbers.
        pause() {
            $interval.cancel(this.interval);
            this.interval = undefined;
            this.isWorking = false;
            this.count -= this.listOfNumbers.length;
        }

        get getListOfNumbersAsString() {
            return this.listOfNumbers.join(' >>> ');
        }

        get getListOfNumbersLength() {
            return this.listOfNumbers.length;
        }
    }

    // Creates new instance of NumberGenerator class.
    function create(name, count, color) {
        return new NumberGenerator(name, count, color);
    }


    return {
        create: create
    }
}]);
