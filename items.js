(function() {
    'use strict';

    angular.module('PageApp')
        .component('items', {
            templateUrl: 'items.template',
            bindings: {
                items: '<'
            }
        });

})();