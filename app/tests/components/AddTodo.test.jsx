var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');
describe('AddTodo',() => {
  it('should exists',() => {
    expect(AddTodo).toExist();
  });
  it('should fire onAddTodo function on form submit',() => {
    let spy = expect.createSpy();
        let addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        let todo = 'Clean the House';
        addtodo.refs.todo.value = todo;
        TestUtils.Simulate.submit(ReactDOM.findDOMNode(addtodo).querySelector('form')[0]);
        expect(spy).toHaveBeenCalledWith(todo);
  });
  it('should not fire onAddTodo prop when invalid input',() => {
    let spy = expect.createSpy();
        let countdownForm = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        countdownForm.refs.todo.value = '';
        TestUtils.Simulate.submit(ReactDOM.findDOMNode(countdownForm).querySelector('form')[0]);
        expect(spy).toNotHaveBeenCalled();
  });
});
