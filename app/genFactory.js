'use strict';


var generatorFactory = angular.module('generatorFactory', []);

generatorFactory.factory('genFactory', [
    '$rootScope',
    '$timeout',
    'eventsConstant',
    function (
        $rootScope,
        $timeout,
        eventsConstant
    ) {

        class RandomNumber {
            value = Math.floor(Math.random() * 99) + 1;
            timeOfGeneration = Date.now();
        };

        class NumberGenerator {
            timeOfCreation = Date.now();
            listOfNumbers = []; // List of the generated numbers.
            randomizer;
            isWorking; // Holds the current status of the generator.
            isHidden = false;

            constructor(name, count, color) {
                this.name = name;
                this.count = count;
                this.color = color;
            };

            // Starts the generation of new random number every random second.
            start() {
                this.isWorking = true;
                $rootScope.$broadcast(eventsConstant.isWorkingChanged);

                let randomSeconds = Math.floor(Math.random() * 10) + 1;
                this.randomizer = $timeout(() => {
                    if (this.count > this.listOfNumbers.length) {
                        this.listOfNumbers.push(new RandomNumber);
                        $rootScope.$broadcast(eventsConstant.numberCreated);

                        // Checks if this new RandomNumber was the last number to be generated.
                        this.count > this.listOfNumbers.length ? this.start() : this.stop();

                    } else {
                        this.stop();
                    }

                }, randomSeconds * 1000);
            };

            pause() {
                $timeout.cancel(this.randomizer);

                this.isWorking = false;
                $rootScope.$broadcast(eventsConstant.isWorkingChanged);
            };

            stop() {
                $timeout.cancel(this.randomizer);
                this.randomizer = undefined;

                this.isWorking = false;
                $rootScope.$broadcast(eventsConstant.isWorkingChanged);
            }

            get getListOfNumbersLength() {
                return this.listOfNumbers.length;
            };
        };

        // Creates new instance of NumberGenerator class.
        function createGenerator(name, count, color) {
            return new NumberGenerator(name, count, color);
        }

        return {
            createGenerator: createGenerator,
        };
    }]);