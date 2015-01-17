angular.module('mapz')
.controller('TestCtrl', ['$scope', 'mapConfig','$timeout', '$stateParams', function ($scope, mapConfig, $timeout, $stateParams) {
    $scope.data = mapConfig;
    console.log(1, mapConfig);
    
}])