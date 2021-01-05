(function() {
    'use strict';

    angular.module('PageApp')
        .controller('ItemsController', ItemsController);


    ItemsController.$inject = ['items'];

    function ItemsController(items) {
        var itemsCtrl = this;
        itemsCtrl.items = items;
    }

})();