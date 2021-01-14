(function() {
    'use strict';

    angular.module('PageApp')
        .component('categories', {
            templateUrl: 'cat.html',
            bindings: {
                items: '<'
            }
        });

})();