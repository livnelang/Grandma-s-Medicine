var grandmaApp = angular.module('grandmaApp',[]);

var model = {
	};


	grandmaApp.run(function ($http) {

	/**
	* Get Request Parameters
	*/
	var parameter = window.location.search.replace( "?", "" ); // will return the GET parameter 
	var values = parameter.split("=");
	var query = values[0]; // Gives us or herbal or nothing

	

	/**
	* Returns Specific Herbal
	*/
		$http.get("https://grandmas-medicine.herokuapp.com/ws_grandma/getSpecificHerbal/" + values[1] ).success(function (data) {
			model.specific_herbal = data;
			}).error(function (data, status, headers, config) {
			       alert("error" + data + status);
			       return status;
			});
	});


/**
* Associates SpecHerbalCtrl to grandmaApp
*/
grandmaApp.controller('SpecHerbalCtrl', function($scope) {
	$scope.herbals = model;
});

