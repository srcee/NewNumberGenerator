genApp.controller('detailsCtrl', [
    '$rootScope',
    '$scope',
    '$routeParams',
    'genActionsService',
    'detailsViewsConstant',
    'eventsConstant',
    function (
        $rootScope,
        $scope,
        $routeParams,
        genActionsService,
        detailsViewsConstant,
        eventsConstant
    ) {
        var currentGenerator = genActionsService.allGenerators[$routeParams.id];
        $scope.count = currentGenerator.count;
        $scope.color = currentGenerator.color;
        $scope.name = currentGenerator.name;
        $scope.isWorking = currentGenerator.isWorking;

        $scope.display = detailsViewsConstant.byTimeOfGeneration;
        $scope.list = genActionsService.sortNumbersByObj[$scope.display.name](currentGenerator.listOfNumbers);

        $scope.filteredList = [];

        $rootScope.$on(eventsConstant.numberCreated, function () {
            $scope.list = currentGenerator.listOfNumbers;
            genActionsService.sortNumbersByObj[$scope.display.name]($scope.list);
        });

        $rootScope.$on(eventsConstant.isWorkingChanged, function () {
            $scope.isWorking = currentGenerator.isWorking;
        });

        $scope.displayTypeHandler = function (event) {
            if (event.target.id && (event.target.id in detailsViewsConstant)) {
                let type = event.target.id;

                $scope.lastUsedDisplayType = $scope.display;
                $scope.display = detailsViewsConstant[type];

                genActionsService.sortNumbersByObj[type](currentGenerator.listOfNumbers);
            }
        };


        $scope.deleteNumHandler = function (idx) {
            let currentNum = currentGenerator.listOfNumbers[idx];
            let dialogInfo = {
                confirmHandler: () => genActionsService.deleteNumber(idx, currentGenerator),
                messageHtmlUrl: './templates/directives/deleteDialogViews/numInfoPartial.html',
                message: {
                    value: currentNum.value,
                    generateDate: currentNum.timeOfGeneration,
                }
            };

            $rootScope.$broadcast(eventsConstant.onDialogShown, dialogInfo);
        };

        $scope.editCountHandler = function (event) {
            currentGenerator.count = event.target.value;
            if (!currentGenerator.interval) {
                currentGenerator.start();
            }
        };

        $scope.editNameHandler = function (event) {
            currentGenerator.name = event.target.value;
        };

        $scope.filterHandler = function (data) {
            $scope.filteredList = [];
            let sortedList = $scope.list.sort((a, b) => a.timeOfGeneration - b.timeOfGeneration);
            let startTime = sortedList[0].timeOfGeneration + (data.from * 1000);
            let endTime = sortedList[0].timeOfGeneration + (data.to * 1000);

            $scope.filteredList = $scope.list.filter(number => number.timeOfGeneration >= startTime && number.timeOfGeneration <= endTime);
        };

        $scope.cancelHandler = function () {
            $scope.display = $scope.lastUsedDisplayType;
            genActionsService.sortNumbersByObj[$scope.display.name](currentGenerator.listOfNumbers);
        };

    }])