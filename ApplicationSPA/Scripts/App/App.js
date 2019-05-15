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
            url: '/Home/About',
            templateUrl: '/Home/About',
        })
        .state('contact', {
            url: '/Home/Contact',
            templateUrl: '/Home/Contact'
        })

    $locationProvider.html5Mode(true);
});

