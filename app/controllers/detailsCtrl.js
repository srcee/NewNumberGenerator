genApp.controller('detailsCtrl', [
    '$rootScope',
    '$scope',
    '$route',
    '$routeParams',
    'genActionsService',
    'detailsViewsConstant',
    'eventsConstant',
    'dialogWindowMessagesConstant',
    function (
        $rootScope,
        $scope,
        $route,
        $routeParams,
        genActionsService,
        detailsViewsConstant,
        eventsConstant,
        dialogWindowMessagesConstant
    ) {
        var currentGenerator = genActionsService.getAllGenerators()[$routeParams.id];
        let activeButton = angular.element(document.getElementById($routeParams.displayType));
        activeButton.addClass('active-button');

        $scope.generatorID = $routeParams.id;
        $scope.displayType = $routeParams.displayType;
        $scope.displayMessage = detailsViewsConstant[$scope.displayType].info;

        var handlerFunctionsObj = {
            byTimeOfGeneration: (arr) => arr.sort((a, b) => a.timeOfGeneration - b.timeOfGeneration),
            byValueAsc: (arr) => arr.sort((a, b) => a.value - b.value),
            random: (arr) => arr.sort((a, b) => a.timeOfGeneration - b.timeOfGeneration)
        };

        $scope.count = currentGenerator.count;
        $scope.currentCount = currentGenerator.getListOfNumbersLength;
        $scope.color = currentGenerator.color;
        $scope.name = currentGenerator.name;
        $scope.isWorking = currentGenerator.isWorking;
        $scope.list = handlerFunctionsObj[$scope.displayType](currentGenerator.listOfNumbers);

        $rootScope.$on(eventsConstant.numberCreated, function () {
            $scope.currentCount = currentGenerator.listOfNumbers.length;
            if (!$scope.hasFilter) {
                $scope.list = handlerFunctionsObj[$scope.displayType](currentGenerator.listOfNumbers);
            }
        });

        $rootScope.$on(eventsConstant.isWorkingChanged, function () {
            $scope.isWorking = currentGenerator.isWorking;
        });

        $scope.byPeriodHandler = function (event) {
            $scope.hasFilter = true;
            angular.element(event.target).addClass('active-button');
        };

        $scope.keyHandler = function (event) {
            if (event.key === 'Enter') {
                event.target.blur();
            };
        };

        $scope.deleteNumHandler = function (idx, time) {

            let currentNum = $scope.list[idx];
            let dialogInfo = {
                confirmHandler: () => {
                    genActionsService.deleteNumber(time, currentGenerator);
                    $scope.currentCount = currentGenerator.getListOfNumbersLength;
                    if ($scope.hasFilter) {
                        $scope.list.splice(idx, 1);
                    }
                },
                messageHtmlUrl: './templates/directives/dialogWindowViews/numInfoPartial.html',
                containerName: dialogWindowMessagesConstant.delete.number.containerName,
                headerMessage: dialogWindowMessagesConstant.delete.number.headerMessage,
                message: {
                    value: currentNum.value,
                    generateDate: currentNum.timeOfGeneration,
                }
            };

            $rootScope.$broadcast(eventsConstant.onDialogShown, dialogInfo);
        };

        $scope.editCountHandler = function (event) {
            let count = event.target.value;
            if (count && !isNaN(+count)) {
                currentGenerator.count = Math.trunc(count);
                event.target.value = currentGenerator.count;
                if (!currentGenerator.interval) {
                    currentGenerator.start();
                }
            } else {
                let dialogInfo = {
                    confirmHandler: () => event.target.focus(),
                    cancelHandler: () => event.target.value = currentGenerator.count,
                    messageHtmlUrl: './templates/directives/dialogWindowViews/editCountFailure.html',
                    containerName: dialogWindowMessagesConstant.edit.inputError.containerName,
                    headerMessage: dialogWindowMessagesConstant.edit.inputError.headerMessage,
                    message: count
                };

                $rootScope.$broadcast(eventsConstant.onDialogShown, dialogInfo);
            }
        };

        $scope.editNameHandler = function (event) {
            currentGenerator.name = event.target.value;
        };

        $scope.filterHandler = function (data) {
            let startTime = currentGenerator.timeOfCreation + (data.from * 1000);
            let endTime = currentGenerator.timeOfCreation + (data.to * 1000);
            $scope.list = currentGenerator.listOfNumbers.filter(number => number.timeOfGeneration >= startTime && number.timeOfGeneration <= endTime);
        };

        $scope.cancelHandler = function () {
            $route.reload();
        };

    }])