import React from 'react';
import GraphContainer from '../graph/graph_container';
import { Link } from 'react-router-dom';

class StockItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchIntradayPrices(this.props.symbol);
    }

    render() {
        const { symbol, prices, key, shares } = this.props;
        let close = 0;
        if (prices) {
            close = prices[prices.length - 1].close;
        }
        let name = 'shares';
        if (shares === 0) {
            name = 'hidden';
        }
        // debugger
        return (
            <li key={key}>
                <Link className='stock' to={`/stocks/${symbol}`}>
                    <div className='stock-left'>
                        <div className='symbol'>{symbol}</div>
                        <div className={name}>{shares} shares</div>
                    </div>
                    <GraphContainer data={prices} name='small-graph' dataKey='close' />
                    <div className='price'>${close}</div>                
                </Link>
            </li>
        )
    }
}

export default StockItem;