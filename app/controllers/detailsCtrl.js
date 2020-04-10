genApp.controller('detailsCtrl', [
    '$rootScope',
    '$scope',
    '$route',
    '$routeParams',
    'genActionsService',
    'detailsViewsConstant',
    function (
        $rootScope,
        $scope,
        $route,
        $routeParams,
        genActionsService,
        detailsViewsConstant
    ) {
        $scope.currentGenerator = genActionsService.getGeneratorsById($routeParams.id);
        $scope.list = $scope.currentGenerator.listOfNumbers;
        $scope.display = genActionsService.displayType;

        $rootScope.$on('numberCreated', function () {
            $scope.list = $scope.currentGenerator.listOfNumbers;
            genActionsService.sortNumbersByObj[$scope.display]($scope.list);
        })

        $scope.displayTypeHandler = function (event) {
            if (event.target.id && detailsViewsConstant.hasOwnProperty(event.target.id)) {
                $scope.display = detailsViewsConstant[event.target.id];
                genActionsService.displayType = event.target.id;
                genActionsService.sortNumbersByObj[event.target.id]($scope.list);
                $route.reload();
            }
        }


        $scope.deleteNumHandler = function (idx) {
            genActionsService.deleteNumber(idx, $scope.currentGenerator);
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