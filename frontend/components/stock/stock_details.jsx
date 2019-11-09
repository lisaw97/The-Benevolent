import React from 'react';

class StockDetails extends React.Component {
    constructor(props) {
        super(props);
        // this.state = this.props.stock;
        const symbol = this.props.match.params.ticker;
    }

    componentDidMount() {
        // this.props.fetchStocks();
        // this.props.fetchTransactions();
    }

    render() {
        const { stock } = this.props;
        return (
            <div className='stock-details-div'>
                <h1>Stock Details Page</h1>
                {/* <ul>
                    <li>Ticker: {stock.symbol}</li>
                    <li>Company Name: {stock.companyName} </li>
                </ul> */}
            </div>
        )
    }
}

export default StockDetails;