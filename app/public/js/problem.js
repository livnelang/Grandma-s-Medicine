var grandmaApp = angular.module('grandmaApp',[]);

var model = {
	};

	grandmaApp.run(function ($http) {

	/**
	* Get Request Parameters
	*/
	var parameter = window.location.search.replace( "?", "" ); // will return the GET parameter 
	var values = parameter.split("=");
	var query = values[1];

	/**
	* Returns Body Part Problems
	*/
	$http.get("https://grandmas-medicine.herokuapp.com/ws_grandma/getAreaProblems/"+query).success(function (data) {
		model.items = data;
		model.herbalname = data.area;
		model.issues = data.issues;
	}).error(function (data, status, headers, config) {
        alert("error" + data + status);
        return status;
	});
});

/**
* Associates ProblemCtrl to grandmaApp
*/
grandmaApp.controller('ProblemCtrl', function($scope) {
	$scope.herbals = model;	
});

