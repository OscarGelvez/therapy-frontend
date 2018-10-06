var app=angular.module('therapy.adminController', []);



app.controller('adminController', ['$scope', '$location', '$auth', function($scope, $location, $auth){

var vm = this;

// Verifico la sesión

//verifico si el usuario esta logueado.
if(!$auth.isAuthenticated()){
	
	$location.path("/login");
};

// Cierro sesión
vm.logout = function() {
	
	$auth.logout();
	$location.path("/login");
};

}])

