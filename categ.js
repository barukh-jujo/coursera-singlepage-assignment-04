(function() {
    'use strict';

    angular.module('PageApp')
        .component('category-list', {
            templateUrl: 'cat.template',
            bindings: {
                items: '<'
            }
        });

})();