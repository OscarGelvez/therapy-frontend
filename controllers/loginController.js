var app=angular.module('therapy.loginController', []);



app.controller('loginController', ['$scope', '$location', '$auth', function($scope, $location, $auth){


	var vm = this;

    vm.login = function() {

        var credentials = {
            email: vm.email,
            password: vm.password
        }

        // Use Satellizer's $auth service to login
        $auth.login(credentials).then(function(data) {
			        	
            // If login is successful, redirect to the users state            
            
            console.log('data', data.config.data.email);
            console.log(data.data.token);
            console.log('data', data);

            swal({
			  position: 'top-end',  
			  title: 'Ha iniciado sesión',
			  showConfirmButton: false,
			  timer: 1500
			});

			//localStorage.setItem("csImV4cCI6", data.data.token);

			$location.path("/admin");

            
        }).catch(function (err) {
        	console.log('Error', err);
        	swal({
 				 title: 'Error',
 				 text: 'Usuario o contraseña incorrecta', 
 				 type: 'error',
  				  timer: 2000
				})
		  });
    }


}])

