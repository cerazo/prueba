app.controller('homeCtrl', ['$scope', '$location', 'appservice', 'appfactory', function($scope, $location, appservice, appfactory){

    $scope.Init = function (){
        if (window.performance) {
            console.info("window.performance work's fine on this browser");
        }
        if (performance.navigation.type == 1) {
            appservice.getAuth('userAuth').then(function(respose) {
                appfactory.setUser(respose.data);
            });
        } else {
            console.info( "This page is not reloaded");
        }
    }
}]);