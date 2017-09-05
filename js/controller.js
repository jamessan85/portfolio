angular.module('RouteControllers', [])

// example of route controllers - enter the name, what it does and link it to app
//.controller('NewsletterSignupController', function($scope, $http) {

    .controller('HomePage', function() {
        angular.element(document).ready(function() {
            $('#portfolio').click(function() {
                $('.body-container1').slideDown(2000);
            })
            $('.upbutton').click(function() {
                 $('.body-container1').slideUp(1000);
            })
        })
    })    