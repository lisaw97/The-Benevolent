import React from 'react';
import { Link } from 'react-router-dom';
import GraphContainer from '../graph/graph_container';
import StockItemContainer from '../stock/stock_item_container';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     snapshots: []
        // }
    }

    componentDidMount() {     
        this.props.fetchSnapshots();
        this.props.fetchStocks();
        this.props.fetchGeneralNews();
        // if (this.state.snapshots.length === 0) {
        //     this.props.fetchSnapshots().then(
        //         res => this.setState({ snapshots: Object.values(res.snapshots) })
        //     )
        // }
    }

    renderStocks() {
        let symbols = Object.values(this.props.transactions);
        symbols = symbols.map(item => item.symbol);
        let uniqueSymbols = new Set(symbols);
        symbols = [...uniqueSymbols];
        return (symbols.map( (symbol, i) => {
            let shares = this.calculateShares(symbol);
            if (shares > 0) {
                return (<StockItemContainer key={i} symbol={symbol} shares={shares}/>)
            }
        }) )    
    }

    renderWatchlist() {
        let symbols = Object.values(this.props.watchlist);
        symbols = symbols.map(item => item.symbol);
        let uniqueSymbols = new Set(symbols);
        symbols = [...uniqueSymbols];
        return (symbols.map((symbol, i) => {
            let shares = this.calculateShares(symbol);
            if (shares === 0) {
                return (<StockItemContainer key={i} symbol={symbol} shares={shares} />)
            }
        }))
    }

    calculateShares(symbol) {
        const { transactions } = this.props;
        let shares = 0;
        let trans = Object.values(transactions);
        trans.forEach( transaction => {
            if (transaction.symbol === symbol) {
                shares = shares + transaction.shares;
            }
        });
        return shares;
    }

    renderNews() {
        if (!this.props.news) {
            return null;
        } else {
            return (
            <ul className='general-news-list'>
                {this.props.news.map((article, i) => {
                    return (
                        <li className='news-article' key={`article-${i}`}>
                            <div>
                                <a href={article.url}>{article.title}</a>
                                <p>{article.description}</p>
                            </div>
                            <img src={article.urlToImage}/>
                        </li>
                    )
                })}
            </ul>
        );
        } 
    }

    renderSnapshots() {
        // return (<SnapshotsContainer snapshots={this.props.snapshots} />)
    }

    render() {
        const snapshot_values = Object.values(this.props.snapshots);
        if (snapshot_values.length === 0) {
            return null;
        } 
        const {snapshots} = this.props;
        let currBal = snapshot_values[snapshot_values.length - 1].balance;
        let open = snapshot_values[0].balance;
        let dollarDiff = currBal - open;
        dollarDiff = parseFloat(Math.round(dollarDiff * 100) / 100).toFixed(2);
        let percentDiff = dollarDiff / open;
        percentDiff = parseFloat(Math.round(percentDiff * 100) / 100).toFixed(2);
        return (
            <div className='portfolio-main-div'>
                <div className='portfolio-info-div'>
                    <div className='portfolio-div'>
                        {/* <h2>Balance</h2>
                        <div>[Insert Graph Here]</div> */}
                        {/* {this.renderSnapshots()} */}
                        <div className='stock-graph'>
                            {/* <h2 className='comp-name'>{stock.companyName}</h2> */}
                            <h1>${currBal}</h1>
                            <h3>${dollarDiff} ({percentDiff}%)</h3>
                            <GraphContainer data={snapshot_values} name='intraday-stock-graph' dataKey='balance' />
                            <ul className='time-list'>
                                <li><a>1D</a></li>
                                <li>1W</li>
                                <li>1M</li>
                                <li>3M</li>
                                <li>1Y</li>
                                <li>5Y</li>
                            </ul>
                        </div>
                        {/* <GraphContainer data={this.props.snapshots} name='intraday-stock-graph' dataKey='balance'/> */}
                    </div>
                    <div className='news-div'>
                        <h2>Recent News</h2>
                        <hr/>
                        {this.renderNews()}
                    </div>
                </div>
                <div className='stocks-div'>
                    <div className='userStocks-div'>
                        <h2>Stocks Owned</h2>
                        <hr/>
                        {this.renderStocks()}
                    </div>
                    <div className='watchlist-div'>
                        <h2>Watchlist</h2>
                        <hr/>
                        {this.renderWatchlist()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;