var grandmaApp = angular.module('grandmaApp',[]);

var model = {
	user: 'Livne',
	};
var specific_herbal;

		/**
	* Get Request Parameters
	*/
	var parameter = window.location.search.replace( "?", "" ); // will return the GET parameter 
	var values = parameter.split("=");
	var query = values[0]; // Gives us or herbal or nothing
	
	grandmaApp.run(function ($http) {


	/**
	* Returns Herbals By Problem
	*/
	if(query == 'problem') {
		$http.get("https://grandmas-medicine.herokuapp.com/ws_grandma/getFilteredHerbal/" + values[1] ).success(function (data) {
		model.items = data;
			}).error(function (data, status, headers, config) {
		        alert("error" + data + status);
		        return status;
		});

	}

	/**
	* Returns Specific Herbal
	*/
	if(query =='herbal') {
		$http.get("https://grandmas-medicine.herokuapp.com/ws_grandma/getSpecificHerbal/" + values[1] ).success(function (data) {
			model.specific_herbal = data;
			//console.log('specific_herbal: ' +specific_herbal.title);
			}).error(function (data, status, headers, config) {
			       alert("error" + data + status);
			       return status;
			});
	}

		/**
		* Returns All Data
		*/
		if(query =='allherbals') { 
				$http.get("https://grandmas-medicine.herokuapp.com/ws_grandma/getHerbalsData").success(function (data) {
					model.items = data;
				}).error(function (data, status, headers, config) {
			        alert("error" + data + status);
			        return status;
				});
			}	

	});


grandmaApp.controller('HerbalCtrl', function($scope) {
	$scope.herbals = model;
	$scope.test = "test";
	console.log($scope.test);
});

