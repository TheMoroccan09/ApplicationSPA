var app = angular.module('App', ['ui.router']);

// Configurations ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);

// Routing 
app.config(['$stateProvider', '$locationProvider',
    function ($stateProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                template: '<h1> Template page home</h1>', // TODO use templateUrl instead
                data: { title: 'Home'}
            })
            .state('about', {
                url: '/Home/About',
                templateUrl: '/Home/About',
                data: {title : 'About'}
            })
            .state('contact', {
                url: '/Home/Contact',
                templateUrl: '/Home/Contact',
                data: {title: 'Contact'}
            })

        $locationProvider.html5Mode(true);
    }]);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// update title dynamically
app.run(['$rootScope', '$transitions','$state',
  function ($rootScope, $transitions, $state) {
    $rootScope.title = 'My Super app'

    $transitions.onSuccess({}, function () {
        $rootScope.title = $state.$current.data.title
    })
  }

])



