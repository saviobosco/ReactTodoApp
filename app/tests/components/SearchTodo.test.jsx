var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch',() => {
  it('should exists',() => {
    expect(TodoSearch).toExist();
  });
  it('should call onSearch with entered input text',() => {
    let spy = expect.createSpy();
        let todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        let searchText = 'Clean';
        todosearch.refs.searchText.value = searchText;
        TestUtils.Simulate.change(todosearch.refs.searchText);
        expect(spy).toHaveBeenCalledWith(false,searchText);
  });
  it('should call onSearch with proper checked value',() => {
    let spy = expect.createSpy();
    let todosearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    let showCompleted = true
    todosearch.refs.showCompleted.checked = showCompleted;
    TestUtils.Simulate.change(todosearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(showCompleted,'');
  });
})
