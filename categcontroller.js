(function() {
    'use strict';

    angular.module('PageApp')
        .controller('CategoryController', CategoryController);


    CategoryController.$inject = ['items'];

    function CategoryController(items) {
        var catCtrl = this;
        catCtrl.items = items;
    }

})();