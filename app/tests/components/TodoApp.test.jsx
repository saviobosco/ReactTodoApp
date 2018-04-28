var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');
describe('TodoApp',() => {
  it('should exists',() => {
    expect(TodoApp).toExist();
  });
  it('should add todo to the todos state on hanleAddTodo',() => {
    let todoText = 'text text';
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[]});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
    // checking if todo.createdAt is set to a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });
  it ('should toggle completed value when handleToggle called',() => {
    let todoData = {
      id:11,
      text: 'Test Features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false); // asserting it is false first
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    // expect completedAt to be a number when completed is set to true
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });
  it ('should remove completedAt when completed is toggle from true to false',() => {
    let todoData = {
      id:11,
      text: 'Test Features',
      completed: true,
      createdAt: 0,
      completedAt: 1234
    };
    let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});
    todoApp.handleToggle(11);
    // expect completedAt to be a number when completed is set to true
    expect(todoApp.state.todos[0].completedAt).toBeA('undefined');
  });
});
