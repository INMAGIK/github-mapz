angular.module('mapz', ['ui.router', 'openlayers-directive'])





.config(function($stateProvider, $urlRouterProvider){

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home/:username/:repo",
      templateUrl: "templates/home.html",
      controller : "TestCtrl",
      resolve : {
        mapConfig : function(repoConfig, $stateParams){
            return repoConfig.getConfig($stateParams.username, $stateParams.repo)
        }
      }
    }
  );
    



})
.run(function(){});
