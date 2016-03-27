define(function(require) {
  'use strict';

  ContactController.$inject = ['$log'];

  function ContactController($log) {

    $log.log('ContactController module loaded...');

    var vm = this;
    vm.message = '';

    initController();

    function initController() {
      vm.message = 'This is the contact view.';
    }

  }

  return ContactController;
});