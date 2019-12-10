import React from 'react';
// import { Link } from 'react-router-dom'
import Octicon, { Search } from "@primer/octicons-react";
import { fetchStock } from '../../actions/stock_actions';
import { Redirect } from 'react-router-dom';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    // debugger
    // <Redirect to='/stocks/${this.state.input}' />
    // this.props.fetchStock(this.state.input);
  }

  handleInput() {
    return () => {
      this.setState({
        input: this.search.value
      })
    }
  }

  render() {
    return (
      <form className="searchbar" onSubmit={this.handleSubmit}>
        <Octicon className="search-icon" icon={Search} size="small"/>
        <input
          placeholder="Search"
          ref={input => this.search = input}
          onChange={this.handleInput()}
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Searchbar;