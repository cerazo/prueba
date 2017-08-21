app.controller('productoCtrl', ['$scope', '$location', '$routeParams', 'appservice', function($scope, $location, $routeParams, appservice){

    $scope.Producto = [];
    $scope.Productos ={};
    $scope.Init = function(){
        if($location.path() === '/producto/actualizar/:id'){

            $scope.CargarProducto($routeParams.id);
        }else if ($location.path() === 'producto/agregar') {
            $scope.Producto.Nombre = '';
            $scope.Producto.Id = '';
            $scope.Producto.Stock = '';
            $scope.Producto.Categoria = '';
            $scope.FechaCreacion = '';
            $scope.Producto.Descripcion = '';
            $scope.Producto.Presentacion = '';
        }
        
    }

    $scope.CargarProducto = function(id){
        appservice.get('getProducById', id).then(function(response){
            if(response.data){
                $scope.Producto.Nombre = response.data.Nombre;
                $scope.Producto.Id = response.data.Id;
                $scope.Producto.Stock = response.data.Stock;
                $scope.Producto.Categoria = response.data.Categoria;
                $scope.Producto.FechaCreacion = response.data.FechaCreacion;
                $scope.Producto.Descripcion = response.data.Descripcion;
            }else{

            }
        });
    }

    $scope.VerProducto = function (id){
        
    } 

    $scope.ActualizarProducto = function(id){

    }

    $scope.EliminarProducto = function(id){

    }

    $scope.VerProductos = function () {
        // body
        appservice.get('getProducts').then(function(response){
            $scope.Productos = response.data;
        });
    }


}])