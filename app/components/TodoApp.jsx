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
          text:"Walk the dog"
        },
        {
          id:uuid(),
          text:"Clean the dog"
        },
        {
          id:uuid(),
          text:"Clean the dog"
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
          text: text
        }
      ]
    });

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
