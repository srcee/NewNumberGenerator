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
        $scope.color = currentGenerator.color;
        $scope.name = currentGenerator.name;

        $scope.display = genActionsService.displayType;

        $rootScope.$on(eventsConstant.numberCreated, function () {
            $scope.list = currentGenerator.listOfNumbers;
            genActionsService.sortNumbersByObj[$scope.display.name]($scope.list);
        })

        $scope.displayTypeHandler = function (event) {
            if (event.target.id && detailsViewsConstant.hasOwnProperty(event.target.id)) {
                let type = event.target.id;
                $scope.display = detailsViewsConstant[type];
                genActionsService.displayType = detailsViewsConstant[type];
                genActionsService.sortNumbersByObj[type](currentGenerator.listOfNumbers);
            }
        };


        $scope.deleteNumHandler = function (idx) {
            genActionsService.deleteNumber(idx, currentGenerator);
        };

        $scope.pauseGenerator = function () {
            $scope.currentGenerator.pause();
        };

        $scope.resumeGenerator = function () {
            $scope.currentGenerator.start();
        };

        $scope.filterHandler = function (data) {
            console.log(data);
        };

    }])