define(function() {

	var appModule = angular.module('appModule', ['ngRoute']);

	appModule.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
		when('/login', {
				templateUrl: 'app/login/login.html',
				controller: 'loginController'
		}).
		when('/dashboard', {
				templateUrl: 'app/dashboard/dashboard.html',
				controller: 'dashboardController'
		}).
		when('/product', {
				templateUrl: 'app/product/product.html',
				controller: 'productController'
		}).
		otherwise({
				redirectTo: '/login'
		});
	}]);

	appModule.factory('Auth', function() {
		var user;
		return {
			setUser: function(aUser) {
				user = aUser;
			},
			isLoggedIn: function() {
				return (user) ? user : false;
			}
		}
	});

	appModule.factory('DataService', function() {
		var LoginData;
		var retailerData;
		return {
			setLoginData: function(data) {
				LoginData = data;
			},
			getLoginData: function() {
				return (LoginData) ? LoginData : "";
			},
			setRetailerData: function(data){
				retailerData = data;
			},
			getRetailerData: function(){
				return (retailerData) ? retailerData : "";
			}
		}
	});

	appModule.run(['$rootScope', '$location', 'Auth', function($rootScope, $location, Auth) {
		$rootScope.$on('$routeChangeStart', function(event) {
			if (!Auth.isLoggedIn()) {
				console.log('DENY');
				$location.path('/login');
			}
		});
	}]);

	appModule.controller('loginController', function($scope, $http, $location, Auth, DataService) {

		$scope.login = function() {
			if ($scope.email && $scope.pwd) {
				var obj = {};
				obj.emailId = $scope.email;
				obj.pwd = $scope.pwd;
				$http({
					method: 'POST',
					data: obj,
					url: 'http://localhost:3000/rpc/login',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then(function(response) {
					Auth.setUser('fintech');
					console.log(response.data);
					DataService.setLoginData(response.data);
					$location.url('/dashboard');
				});
			}
		};

	});

	appModule.controller('dashboardController', function($scope, Auth, $location, DataService, $http) {

		$scope.logout = function() {
			Auth.setUser('');
			$location.url('/login');
		}

		$http({
			method: 'GET',
			url: 'http://localhost:3000/rpc/retailer',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).then(function(response) {
			$scope.productData = response.data;
			DataService.setRetailerData(response.data);
			console.log(response.data);
			$scope.retailerData = response.data;
		});

		$scope.loginData = DataService.getLoginData();

		$scope.selected = {};

		if ($scope.loginData) {
			$scope.selected.account = $scope.loginData.accounts[0];
			$scope.selected.month = $scope.loginData.months[$scope.loginData.months.length - 1];
		}

		$scope.monthSelected = function(month) {
			$scope.selected.month = month;
		}

		$scope.showDetails = function(data, name){
			$('#myModal').modal('show');
			$scope.selectedItem = {};
			$scope.selectedItem.name = name;
			$scope.selectedItem.data = data;
			$('[data-toggle="tooltip"]').tooltip();
		}

		$scope.buyProduct = function(data, name){
			$('#myModal').modal('hide');
			$('#myModal1').modal('show');
		}

		$scope.availLoan = function(item, type){
			if(type){
				item.buyClicked = false;
				$("#alertMessage").show();
				setTimeout(function() {
					$("#alertMessage").hide();
				}, 1000);
			} else {
				if(item.loanStatus === "OK"){
					item.buyClicked = false;
					$("#alertMessage").show();
					setTimeout(function() {
						$("#alertMessage").hide();
					}, 1000);
				} else {
					$("#alertWarningMessage").show();
					setTimeout(function() {
						$("#alertMessage").hide();
					}, 1000);
				}
			}
			
		}

	});

	appModule.controller('productController', function($scope, Auth, $location, $http, DataService) {

		$scope.logout = function() {
			Auth.setUser('');
			$location.url('/login');
		}

		$scope.loginData = DataService.getLoginData();

		$http({
			method: 'GET',
			url: 'http://localhost:3000/rpc/retailer',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).then(function(response) {
			$scope.productData = response.data;
			DataService.setRetailerData(response.data);
		});

		var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				if (panel.style.display === "block") {
					panel.style.display = "none";
				} else {
					panel.style.display = "block";
				}
			});
		}

	});

});