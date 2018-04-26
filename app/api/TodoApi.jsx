var $ = require('jquery');

module.exports  = {
  setTodos: function (todos) {
    if ( $.isArray(todos)) {
      localStorage.setItem('todos',JSON.stringify(todos) );
      return todos;
    } //
  },
  getTodos: function () {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      // execute this if any error
    }
    return ( $.isArray(todos)) ? todos : [] ;
  },
  filterTodos: function (todos,showCompleted,searchText) {
    let filteredTodos = todos;
    //filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });
    //filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      let todoText = todo.text.toLowerCase();
      return searchText.length === 0 || todoText.indexOf(searchText) > -1;

    })
    //sortTodos with none completed first
    filteredTodos.sort((a,b) => {
      if ( !a.completed && b.completed) {
        return -1;
      } else if ( a.completed && !b.completed) {
        return 1;
      }else {
        return 0;
      }
    })
    return filteredTodos;
  }
}
