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

    .when('/projects/project1', {
        templateUrl: 'templates/project1.html',
    })

    .when('/projects/project2', {
        templateUrl: 'templates/project2.html',
    })

    .when('/projects/project3', {
        templateUrl: 'templates/project3.html',
    })

});    