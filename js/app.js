angular.module('Portfolio', ['ngRoute', 'RouteControllers']);

angular.module('Portfolio').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
    
    // **** example of app and serving controller ***
    // .when('/music', {
    // templateUrl: 'templates/music.html',
    // controller: 'MusicSearch'
	// })

    $routeProvider.when('/', {
		templateUrl: 'templates/home.html',
        controller: 'HomePage'
	})

    .when('/portfolio', {
        templateUrl: 'templates/portfolio.html',
    })

});    