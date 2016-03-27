define(function(require) {
  'use strict';

  HomeController.$inject = ['$log'];

  function HomeController($log) {
    
    $log.log('HomeController module loaded...');

    var vm = this;
    vm.todo = '';
    vm.todos = [];
    vm.addTodo = addTodo;
    vm.removeTodo = removeTodo;
    initController();

    function initController() {

    }

    function addTodo() {
      vm.todos.push(vm.todo);
      vm.todo = '';
    };

    function removeTodo(index) {
      vm.todos.splice(index, 1);
    };

  }

  return HomeController;
});