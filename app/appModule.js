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
	})

	appModule.run(['$rootScope', '$location', 'Auth', function($rootScope, $location, Auth) {
			$rootScope.$on('$routeChangeStart', function(event) {
					if (!Auth.isLoggedIn()) {
							console.log('DENY');
							$location.path('/login');
					}
			});
	}]);

	appModule.controller('loginController', function($scope, $http, $location, Auth) {

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
									sessionStorage.setItem('fintechData', JSON.stringify(response.data));
									Auth.setUser('fintech');
									console.log(response.data);
									$location.url('/dashboard');
									console.log(response);
							});
					}
			};


	});

	appModule.controller('dashboardController', function($scope, Auth, $location) {

			$scope.logout = function() {
					Auth.setUser('');
					$location.url('/login');
			}

			$('[data-toggle="tooltip"]').tooltip();

			$scope.loginData = JSON.parse(sessionStorage.getItem('fintechData'));

			$scope.selected = {};

			if ($scope.loginData) {
					$scope.selected.account = $scope.loginData.accounts[0];
					$scope.selected.month = $scope.loginData.months[0];
			}

			$scope.monthSelected = function(month) {
					$scope.selected.month = month;
			}

	});

	appModule.controller('productController', function($scope, Auth, $location, $http) {

			$scope.logout = function() {
					Auth.setUser('');
					$location.url('/login');
			}

			//sessionStorage.setItem('fintechData', JSON.stringify(response.data));

			$http({
					method: 'GET',
					url: 'http://localhost:3000/rpc/retailer',
					headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
					}
			}).then(function(response) {
					$scope.productData = response.data;
					console.log(response);
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