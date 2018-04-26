var uuid = require('uuid');

var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      searchText: '',
      showCompleted: false,
      todos: [
        {
          id:uuid(),
          text:"Walk the dog",
          completed: true
        },
        {
          id:uuid(),
          text:"Clean the dog",
          completed: false
        },
        {
          id:uuid(),
          text:"Clean the dog",
          completed: false
        }
      ]
    }
  },
  handleSearch: function (showCompleted,searchText) {
    this.setState({showCompleted,searchText: searchText.toLowerCase() });
  },
  handleAddTodo: function (text) {
    // this func handles the add todo event.
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  handleToggle: function (id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if ( todo.id === id) { todo.completed = !todo.completed}
      return todo;
    });
    this.setState({todos:updatedTodos});
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});
module.exports = TodoApp;
