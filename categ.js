(function() {
    'use strict';

    angular.module('PageApp')
        .component('categories', {
            templateUrl: 'cat.template',
            bindings: {
                items: '<'
            }
        });

})();