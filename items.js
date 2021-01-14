(function() {
    'use strict';

    angular.module('PageApp')
        .component('items', {
            templateUrl: 'items.html',
            bindings: {
                items: '<'
            }
        });

})();