var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function () {
    let showCompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted,searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search Todo" onChange={this.handleSearch} />
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
            show completed todos
          </label>
        </div>
      </div>
    )
  }
})
module.exports = TodoSearch;
