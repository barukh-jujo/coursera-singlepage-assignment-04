(function() {
    'use strict';

    angular.module('PageApp')
        .controller('CategoryController', CategoryController);


    CategoryController.$inject = ['items'];

    function CategoryController(items) {
        var itemsCtrl = this;
        itemsCtrl.items = items;
    }

})();