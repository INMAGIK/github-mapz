angular.module('mapz')
.controller('TestCtrl', ['$scope', 'repoConfig','$timeout' ,function ($scope, repoConfig, $timeout) {
    /*
    repoConfig.getConfigForRepo("inmagik", "github-mapz")
    .then(function(data){
        console.log("config", data);
    })
    */
    $scope.data = {};
    $scope.loaded = false;
    repoConfig.getConfig("inmagik", "github-mapz")
    .then(function(data){
        console.log("1", data)
        $timeout(function(){
            $scope.data = data;
        });
    })
    
    
}])