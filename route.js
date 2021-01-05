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
                templateUrl: 'home.template'
            })
            .state('catlist', {
                url: '/category-list',
                templateUrl: 'src/menuapp/templates/category-list.template.html',
                controller: 'CategoryController as categs',
                resolve: {
                    items: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/items/{category}',
                templateUrl: 'src/menuapp/templates/items.template.html',
                controller: 'ItemsController as itemsCtrl',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.category);
                    }]
                }
            });


    }

})();