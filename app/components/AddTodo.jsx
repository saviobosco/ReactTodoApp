var React = require('react');

var AddTodo = React.createClass({
  propTypes: {
    onAddTodo : React.PropTypes.func.isRequired
  },
  onAddTodo : function (e) {
    // call the passed down props.addtodo()
    e.preventDefault();
        let todo = this.refs.todo.value;
        if ( todo.length > 0 ) {
          this.refs.todo.value = '';
          this.props.onAddTodo(todo);
        } else {
          this.refs.todo.focus();
        }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.onAddTodo}>
          <input type="text" ref="todo" placeholder="What do you want to do ?" />
          <button className="button expanded" type="submit"> Add Todo</button>
        </form>

      </div>
    )
  }
});

module.exports =  AddTodo;
