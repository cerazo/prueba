app.service('appservice', ['$http', function($http){

    var api = {};
    var url = "../../controllers/route.php?opcion=";

    app.login = function (opcion, usuario, pass){
        return $http({
            method: 'GET',
            url: url+opcion,
            data: data,
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            cache: false
        });
    };

    app.get = function(opcion){
        return $http({
            method: 'GET',
            url: url+opcion,
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            cache: false
        });
    }

    return api;

}]);