import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  // handleSubmit(e, data) {
  //   e.preventDefault();
  //   debugger
  //   // return <Link to={`/stocks/${data.value}`} />
  //   // window.location.hash = `/stocks/${data.value}`;
  // }

  getSymbols() {
    let symbols = [];
    const { allStocks } = this.props;
    const allSymbols = Object.keys(allStocks);
    for (let i = 0; i < allSymbols.length; i++) {
      let stock = allStocks[allSymbols[i]];
      symbols.push({
        key: stock.symbol,
        value: stock.symbol,
        text: `${stock.symbol}    ${stock.company_name}`,
        as: Link,
        to: `/stocks/${stock.symbol}`
      });
    }
    return symbols
  }

  render() {
    let symbols;
    if (this.props.allStocks) {
      symbols = this.getSymbols();
    }

    return (
      <div className="searchbar-container">
          <Dropdown
            placeholder='Search'
            fluid
            search
            selection
            options={symbols}
            onChange={this.handleSubmit}
          />
      </div>
    )
  }
}

export default Searchbar;