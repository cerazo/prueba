app.controller('indexCtrl', ['$scope', '$location', '$window', 'appservice', function ($scope, $location, appservice, $window) {
    $scope.usuario = '';
    $scope.password = '';

    $scope.Ingresar = function(){
        //if($scope.usuario !== "" && $scope.password !== ""){
            //appservice.login("login", $scope.usuario, $scope.password).then(function(response){
                //if(response.data !== null && response.data !== ''){
                    //$location.path('home');
                    $location.path('/home');
                //}
           // });
        //}
    }
}]);