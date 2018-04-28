var uuid = require('uuid');
var moment = require('moment');
var React = require('react');

var TodoApi = require('TodoApi');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      searchText: '',
      showCompleted: false,
      todos: TodoApi.getTodos()
    }
  },
  componentDidUpdate: function () {
    TodoApi.setTodos(this.state.todos);
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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  handleToggle: function (id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if ( todo.id === id) {
         todo.completed = !todo.completed
         todo.completedAt = todo.completed ? moment().unix() : undefined ;
       }
      return todo;
    });
    this.setState({todos:updatedTodos});
  },
  render: function() {
    var {todos,showCompleted,searchText} = this.state;
    let filteredTodos = TodoApi.filterTodos(todos,showCompleted,searchText);
    return (
      <div>
        <h1 className="page-title"> Todo App</h1>
          <div className="row">
            <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo} />
              </div>
            </div>
          </div>
      </div>
    );
  }
});
module.exports = TodoApp;
