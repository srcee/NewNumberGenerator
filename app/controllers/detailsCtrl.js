genApp.controller('detailsCtrl', [
    '$rootScope',
    '$scope',
    '$route',
    '$routeParams',
    'genActionsService',
    'detailsViewsConstant',
    'eventsConstant',
    function (
        $rootScope,
        $scope,
        $route,
        $routeParams,
        genActionsService,
        detailsViewsConstant,
        eventsConstant
    ) {
        var currentGenerator = genActionsService.allGenerators[$routeParams.id];

        $scope.list = currentGenerator.listOfNumbers;
        $scope.count = currentGenerator.count;
        $scope.color = currentGenerator.color;
        $scope.name = currentGenerator.name;
        $scope.filteredList = [];

        $scope.display = detailsViewsConstant.byTimeOfGeneration;
        $scope.lastUsedDisplayType = detailsViewsConstant.byTimeOfGeneration;

        $rootScope.$on(eventsConstant.numberCreated, function () {
            $scope.list = currentGenerator.listOfNumbers;
            genActionsService.sortNumbersByObj[$scope.display.name]($scope.list);
        })

        $scope.displayTypeHandler = function (event) {
            if (event.target.id && detailsViewsConstant.hasOwnProperty(event.target.id)) {
                let type = event.target.id;

                $scope.lastUsedDisplayType = $scope.display;
                $scope.display = detailsViewsConstant[type];

                genActionsService.displayType = detailsViewsConstant[type];
                genActionsService.sortNumbersByObj[type](currentGenerator.listOfNumbers);
            }
        };


        $scope.deleteNumHandler = function (idx) {
            genActionsService.deleteNumber(idx, currentGenerator);
        };

        $scope.pauseGenerator = function () {
            currentGenerator.pause();
        };

        $scope.resumeGenerator = function (event) {
            currentGenerator.count = event.target.value;
            currentGenerator.start();
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