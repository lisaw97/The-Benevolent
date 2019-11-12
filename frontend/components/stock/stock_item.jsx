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
        // debugger
        return (
            <li key={key}>
                <Link className='stock' to={`/stocks/${symbol}`}>
                    <div className='stock-left'>
                        <div className='symbol'>{symbol}</div>
                        <div className='shares'>{shares} shares</div>
                    </div>
                    <GraphContainer data={prices} name='small-graph' />
                    <div className='price'>price</div>                
                </Link>
            </li>
        )
    }
}

export default StockItem;