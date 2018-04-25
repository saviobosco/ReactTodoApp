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
          id:1,
          text:"Walk the dog"
        },
        {
          id:2,
          text:"Clean the dog"
        },
        {
          id:3,
          text:"Clean the dog"
        }
      ]
    }
  },
  handleSearch: function (showCompleted,searchText) {
    this.setState({showCompleted,searchText: searchText.toLowerCase() });
  },
  handleAddTodo: function (todo) {
    // this func handles the add todo event.

  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});
module.exports = TodoApp;