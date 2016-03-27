define(function(require) {
  'use strict';

  AboutController.$inject = ['$log'];

  function AboutController($log) {

    $log.log('AboutController module loaded...');

    var vm = this;
    vm.message = '';

    initController();

    function initController() {
      vm.message = 'This is the about view.';
    }

  }

  return AboutController;
});