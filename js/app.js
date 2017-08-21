var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
    .when("/", {
        templateUrl: "views/login.html",
        controller: "indexCtrl"
    })
    .when("/home", {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl'
    })
    .when('/producto/add', {
        templateUrl: 'views/addproducto.html',
        controller: 'productoCtrl'
    })
    .when('/productos/list', {
        templateUrl: 'views/productos',
        controller: 'productoCtrl'
    })
    .when('/producto/actualizar/:id', {
        templateUrl: 'actualizarProducto.html',
        controller: 'productoCtrl'
    }).when('/producto/ver/:id',{
        templateUrl: 'verProducto.html',
        controller: 'productoCtrl'
    });

    //if(window.history && window.history.pushState){
    $locationProvider.html5Mode(false).hashPrefix("");
    //$locationProvider;
});