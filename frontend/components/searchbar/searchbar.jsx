import React from 'react';

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
    window.location.hash = `/stocks/${this.state.input}`;
    this.setState({
      input: ''
    })
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
      <div className="searchbar-container">
        <form className="searchbar" onSubmit={this.handleSubmit}>
          <input
            placeholder="Search"
            ref={input => this.search = input}
            onChange={this.handleInput()}
          />
        </form>
        <button type="submit"><i class="fa fa-search"></i></button>
      </div>
    )
  }
}

export default Searchbar;