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
		  input: 'text',
		  confirmButtonText: 'Next &rarr;',
		  showCancelButton: true,
		  progressSteps: ['1', '2', '3']
		}).queue([
		  {
		    title: 'Question 1',
		    text: 'Chaining swal2 modals is easy'
		  },
		  'Question 2',
		  'Question 3'
		]).then((result) => {
		  if (result.value) {
		    swal({
		      title: 'All done!',
		      html:
		        'Your answers: <pre><code>' +
		          JSON.stringify(result.value) +
		        '</code></pre>',
		      confirmButtonText: 'Lovely!'
		    })
		  }
		})  	
	}







/* Carga el mapa de Contacto */
Map.init();



}])
