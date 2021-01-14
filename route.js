(function() {
    'use strict';

    angular.module('PageApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html'
            })
            .state('category', {
                url: '/category',
                templateUrl: 'catlist.html',
                controller: 'CategoryController as catCtrl',
                resolve: {
                    items: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/category/{category}',
                templateUrl: 'item.html',
                controller: 'ItemsController as itemsCtrl',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.category);
                    }]
                }
            });


    }

})();