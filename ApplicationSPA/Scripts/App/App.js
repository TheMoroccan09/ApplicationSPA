var app = angular.module('App', ['ui.router']);


app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);

// Routing 
app.config(function ($stateProvider, $locationProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: '<h1> Template page home</h1>'
        })
        .state('about', {
            url: '/about',
            template: '<h1> Template page about</h1>',
            controller: 'AboutController'
        })
        .state('contact', {
            url: '/contact',
            template: '<h1> Template page Contact</h1>'
        })
});

