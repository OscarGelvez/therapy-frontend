var app=angular.module('therapy', ['ngRoute', 'therapy.therapyController', 'therapy.loginController', 'therapy.adminController', 'satellizer'])

.constant('ROLES', {
 MANAGER: {
 ROL:1,
 PATH: "/manager"
 },
 PUBLIC: {
 ROL:2,
 PATH:"/home"
 }
})


.factory('urlActual', function(){
return{
   url:""
};
  
})

app.config(['$routeProvider', '$locationProvider', 'ROLES', '$authProvider',   
  function($routeProvider, $locationProvider, ROLE, $authProvider) {

  $locationProvider.hashPrefix(''); 

  // Satellizer configuration that specifies which API
  // route the JWT should be retrieved from
  $authProvider.loginUrl = 'http://192.168.10.10/api/authenticate';

 
 //*************************Enrutamiento vistas públicas*******************************
    $routeProvider
      .when('/therapy', {
      templateUrl : "views/public/allTherapy.html",
      controller  : 'therapyController as therapy'
      })

      .when('/login', {
      templateUrl : "views/public/loginTherapy.html",
      controller  : 'loginController as auth'
      })  

      .when('/admin', {
      templateUrl : "views/admin/adminTherapy.html",
      controller  : 'adminController as admin'
      })       
       
   

    /*
     .when('/Admin_inicio', {
      templateUrl : 'Vista/administrador/inicio.html',
        controller  : 'controllerInicio_Admin',
        data: {
        authorized: [ROLES.ADMIN.ROL]
        }
           
        }) */             

        .otherwise({
            redirectTo: '/therapy#home' // + actualURL() // inicio es el mismo login  
        });
}])

/* Directiva que permite dirigirse a las secciones de la página*/
.directive('scrollToItem', function() {                                                      
    return {                                                                                 
        restrict: 'A',                                                                       
        scope: {                                                                             
            scrollTo: "@"                                                                    
        },                                                                                   
        link: function(scope, $elm,attr) {                                                   

            $elm.on('click', function() {                                                    
                $('html,body').animate({scrollTop: $(scope.scrollTo).offset().top }, 5); //Propiedad animate jquery
            });                                                                              
        }                                                                                    
}})  

/* Servicio que carga el mapa */
.service('Map', function($q) {

  //var myLatLng = {lat: 7.911968, lng: -72.500412};
  var myLatlng = new google.maps.LatLng(7.911968, -72.500412);
    
  this.init = function() {
      var options = {
          center: myLatlng, //new google.maps.LatLng(myLatLng),
          zoom: 18,
          disableDefaultUI: true    
      }
      this.map = new google.maps.Map(
          document.getElementById("map"), options
      );
      this.places = new google.maps.places.PlacesService(this.map);

      this.marker = new google.maps.Marker({
        map: this.map,
        position: myLatlng
      }); 
  };



    

});
