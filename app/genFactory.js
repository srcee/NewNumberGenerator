'use strict';


var generatorFactory = angular.module('generatorFactory', []);

generatorFactory.factory('genFactory', ['$rootScope', '$interval', function ($rootScope, $interval) {

    class NumberGenerator {
        timeOfCreation = Date.now();
        listOfNumbers = []; // List of the generated numbers.
        interval;
        isWorking; // Holds the current status of the generator.
        isHidden = false;

        constructor(name, count, color) {
            this.name = name;
            this.count = count;
            this.color = color;
        }

        // Starts the generation of new random number every 5 sec.
        start() {
            this.isWorking = true;
            this.interval = $interval(() => {
                if (this.count > this.listOfNumbers.length) {
                    this.listOfNumbers.push(new Number);
                    $rootScope.$broadcast('numberCreated');
                } else {
                    $interval.cancel(this.interval);
                    this.interval = undefined;
                }
            }, 1000);
        }

        // Pauses the generation of numbers and subtract 'count' with the number of currently generated numbers.
        pause() {
            $interval.cancel(this.interval);
            this.interval = undefined;
            this.isWorking = false;
        }

        get getListOfNumbersLength() {
            return this.listOfNumbers.length;
        }
    }

    // Creates new instance of NumberGenerator class.
    function create(name, count, color) {
        return new NumberGenerator(name, count, color);
    }


    class Number {
        value = Math.floor(Math.random() * 99) + 1;
        timeOfGeneration = Date.now();
    }


    return {
        create: create,
    }
}]);