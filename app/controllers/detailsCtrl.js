genApp.controller('detailsCtrl', [
    '$rootScope',
    '$scope',
    '$routeParams',
    '$timeout',
    'genActionsService',
    'detailsViewsConstant',
    'eventsConstant',
    'dialogWindowMessagesConstant',
    function (
        $rootScope,
        $scope,
        $routeParams,
        $timeout,
        genActionsService,
        detailsViewsConstant,
        eventsConstant,
        dialogWindowMessagesConstant
    ) {
        var currentGenerator = genActionsService.getAllGenerators()[$routeParams.id];


        $scope.repeatCycles = resetLimit(); // How many numbers to be displayed /how many cycles are to be made by ng-repeat/.
        $scope.count = currentGenerator.count;
        $scope.color = currentGenerator.color;
        $scope.name = currentGenerator.name;
        $scope.isWorking = currentGenerator.isWorking;
        $scope.display = detailsViewsConstant.byTimeOfGeneration;
        $scope.list = genActionsService.sortNumbersByObj[$scope.display.name](currentGenerator.listOfNumbers);

        $scope.stringify = function (x) { return JSON.stringify(x) }

        function displayTypeHandler(type) {
            $scope.lastUsedDisplayType = $scope.display;
            $scope.display = type;
        };

        // This function causes ng-repeat to be refreshed.
        function refreshNgRepeat() {
            let refreshedList = $scope.list;
            $scope.list = [];
            $timeout(() => $scope.list = refreshedList, 1);
        };

        // This function causes ng-repeat to always show all generated numbers.
        function resetLimit() {
            return currentGenerator.count > currentGenerator.listOfNumbers.length ? currentGenerator.count : currentGenerator.listOfNumbers.length;
        };

        $rootScope.$on(eventsConstant.numberCreated, function () {
            $scope.list = currentGenerator.listOfNumbers;
            genActionsService.sortNumbersByObj[$scope.display.name]($scope.list);
        });

        $rootScope.$on(eventsConstant.isWorkingChanged, function () {
            $scope.isWorking = currentGenerator.isWorking;
        });

        $scope.enterHandler = function (event) {
            if (event.key === 'Enter') {
                event.target.blur();
            };
        };

        $scope.byTimeOfGenerationHandler = function () {
            $scope.repeatCycles = resetLimit();
            displayTypeHandler(detailsViewsConstant.byTimeOfGeneration);
            genActionsService.sortNumbersByObj[detailsViewsConstant.byTimeOfGeneration.name]($scope.list);
            refreshNgRepeat();
        };

        $scope.byValueAscHandler = function () {
            $scope.repeatCycles = resetLimit();
            displayTypeHandler(detailsViewsConstant.byValueAsc);
            genActionsService.sortNumbersByObj[detailsViewsConstant.byValueAsc.name]($scope.list);
            refreshNgRepeat();
        };

        $scope.byPeriodHandler = function () {
            displayTypeHandler(detailsViewsConstant.byPeriod);
            genActionsService.sortNumbersByObj[detailsViewsConstant.byTimeOfGeneration.name]($scope.list);
            refreshNgRepeat();
        };

        $scope.randomHandler = function () {
            $scope.repeatCycles = resetLimit();
            displayTypeHandler(detailsViewsConstant.random);
            genActionsService.sortNumbersByObj[detailsViewsConstant.random.name]($scope.list);
            refreshNgRepeat();
        };


        $scope.deleteNumHandler = function (idx) {
            let currentNum = currentGenerator.listOfNumbers[idx];
            let dialogInfo = {
                confirmHandler: () => genActionsService.deleteNumber(idx, currentGenerator),
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
                currentGenerator.count = count;
                if (!currentGenerator.interval) {
                    currentGenerator.start();
                }
            }
        };

        $scope.editNameHandler = function (event) {
            currentGenerator.name = event.target.value;
        };

        $scope.filterHandler = function (data) {
            let startTime = $scope.list[0].timeOfGeneration + (data.from * 1000);
            let endTime = $scope.list[0].timeOfGeneration + (data.to * 1000);
            let filteredList = $scope.list.filter(number => number.timeOfGeneration >= startTime && number.timeOfGeneration <= endTime);
            refreshNgRepeat();
            $scope.repeatCycles = filteredList.length;
        };

        $scope.cancelHandler = function () {
            $scope.display = $scope.lastUsedDisplayType;
            $scope.type = $scope.lastUsedDisplayType.name;
            genActionsService.sortNumbersByObj[$scope.display.name]($scope.list);
            $scope.repeatCycles = resetLimit();
            refreshNgRepeat();
        };

    }])