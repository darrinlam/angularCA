/*global angular*/
/*global todoDirective*/

angular.module('app', [])
  .controller('mainCtrl', mainCtrl)
  .directive('tododir', todoDirective);

function mainCtrl ($scope) {

  $scope.todos = [];

  $scope.addNew = function (todo) {
    $scope.todos.push({ 
      type: todo.type,
      task: todo.task,
      notes: todo.notes
    }); 
    
    todo.type = ''; 
    todo.task = '';
    todo.notes ='';
  };
}

function todoDirective () {
  return {
    scope: {
      todo: '=' 
    },
    restrict: 'E', 
    replace: 'true',
    template: (
      '<div class="todolist">' +
        '<h2>{{todo.type}}</h2>' +
        '<h5>{{todo.task}}</h5>' + 
        '<h6>{{todo.notes}}</h6>' +
        '<button>Done</button>' +
      '</div>'
    ), 

  };
}
