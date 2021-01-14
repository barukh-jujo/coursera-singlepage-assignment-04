(function() {
    'use strict';

    angular.module('PageApp')
        .component('category-list', {
            templateUrl: 'cat.html',
            bindings: {
                items: '<'
            }
        });

})();