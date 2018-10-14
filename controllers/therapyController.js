var app=angular.module('therapy.therapyController', []);

app.constant('CONFIG', {
 TEMPLATE_DIR:"",
 
})

app.controller('therapyController', ['$scope', '$location', 'Map', function($scope, $location, Map){

	var therapy = this;

	// Iniciamos visualizando los links "Ver más"  
	therapy.showMore1 = true;
  	therapy.showMore2 = true;

	therapy.scrollTo = function(hash) {
    	//$location.path(hash);
    	$location.hash(hash);
  	};

  	therapy.changeShow = function(value, id){
  		console.log(value);
  		if(id == 1){
  			therapy.showMore1 = !value;
  		}
  		else{
  			therapy.showMore2 = !value;	
  		}
  		
  	};

  	

  	therapy.algo= function(){
  		 
		swal.mixin({
		  
		  confirmButtonText: 'Siguiente',
		  showCancelButton: false,
		  progressSteps: ['1', '2', '3', '4']
		}).queue([
		  {
		    title: 'Bienvenidos al rincón Terapéutico'		    
		  },
		  
		    'A continuación, te daremos a conocer contenido puntual acerca de los videojuegos y los hábitos del rol escolar en los adolescentes.',
		  
		  'Te brindamos estrategias que pueden ser útiles para detectar si existe una dependencia a los videojuegos.',
		  'Por ultimo encontraras recomendaciones para el manejo apropiado del tiempo frente a la ejecución de las diferentes actividades de tu diario vivir.'
		]) 	
	}







/* Carga el mapa de Contacto */
Map.init();



}])
