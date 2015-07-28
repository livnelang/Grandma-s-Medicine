var grandmaApp = angular.module('grandmaApp',[]);

var model = {
	};
	
	grandmaApp.run(function ($http) {

		/**
		* Returns Random Daily Tip
		*/
		$http.get("https://grandmas-medicine.herokuapp.com/ws_grandma/getDailyTip").success(function (data) {
			model.tip = data;
			}).error(function (data, status, headers, config) {
			       alert("error" + data + status);
			       return status;
			});
	});

/**
* Associates TipCtrl to grandmaApp
*/
grandmaApp.controller('TipCtrl', function($scope) {
	$scope.herbals = model;
});

