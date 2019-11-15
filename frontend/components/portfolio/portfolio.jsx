import React from 'react';
import { Link } from 'react-router-dom';
import GraphContainer from '../graph/graph_container';
import StockItemContainer from '../stock/stock_item_container';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fiveYears: [],
            snapshots: [],
            time: '5Y'
        }
        this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    componentDidMount() {     
        // this.props.fetchSnapshots();

        this.props.fetchStocks();
        this.props.fetchGeneralNews();
        if (this.state.snapshots.length === 0) {
            this.props.fetchSnapshots().then(
                res => this.setState({ fiveYears: Object.values(res.snapshots) })
            )
        }
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

    handleTimeChange(e) {
        let time = e.currentTarget.innerText;
        if (time === '5Y') {
            this.setState({ snapshots: Object.values(this.props.snapshots), time: time })
        } else if (time === '1Y') {
            let startId = this.props.snapshots['2018-01-19'].id;
            this.setState({ snapshots: this.state.fiveYears.slice(startId), time: time });
        } else if (time === '3M') {
            let startId = this.props.snapshots['2018-10-19'].id;
            this.setState({ snapshots: this.state.fiveYears.slice(startId), time: time });
        } else if (time === '1M') {
            let startId = this.props.snapshots['2018-12-19'].id;
            this.setState({ snapshots: this.state.fiveYears.slice(startId), time: time });
        } else if (time === '1W') {
            let startId = this.props.snapshots['2019-01-11'].id;
            this.setState({ snapshots: this.state.fiveYears.slice(startId), time: time });
        } else {
            let startId = this.props.snapshots['2019-01-18'].id;
            this.setState({ snapshots: this.state.fiveYears.slice(startId), time: time });
        }
    }

    setName(time) {
        if (this.state.time === time) {
            return 'highlight';
        } else {
            return 'none';
        }
    }

    render() {
        let { snapshots } = this.state;
        if (Object.values(this.props.snapshots).length === 0) {
            return null;
        } 
        if (snapshots.length === 0) {
            snapshots = Object.values(this.props.snapshots);
        }
        let currBal = snapshots[snapshots.length - 1].balance;
        let open = snapshots[0].balance;
        let dollarDiff = currBal - open;
        dollarDiff = parseFloat(Math.round(dollarDiff * 100) / 100).toFixed(2);
        let percentDiff = dollarDiff / open;
        percentDiff = parseFloat(Math.round(percentDiff * 100) / 100).toFixed(2);
        
        return (
            <div className='portfolio-main-div'>
                <div className='portfolio-info-div'>

                    <div className='portfolio-div'>
                        {/* {this.renderSnapshots()} */}

                        <div className='stock-graph'>
                            <h1>${currBal}</h1>
                            <h3>${dollarDiff} ({percentDiff}%)</h3>
                            <GraphContainer data={snapshots} name='intraday-stock-graph' dataKey='balance' />
                            <ul className='time-list'>
                                {/* <li className={this.setName('1D')} onClick={this.handleTimeChange}>1D</li> */}
                                <li className={this.setName('1W')} onClick={this.handleTimeChange}>1W</li>
                                <li className={this.setName('1M')} onClick={this.handleTimeChange}>1M</li>
                                <li className={this.setName('3M')} onClick={this.handleTimeChange}>3M</li>
                                <li className={this.setName('1Y')} onClick={this.handleTimeChange}>1Y</li>
                                <li className={this.setName('5Y')} onClick={this.handleTimeChange}>5Y</li>
                            </ul>
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

                <div className='news-div'>
                    <h2>Recent News</h2>
                    <hr/>
                    {this.renderNews()}
                </div>
            </div>
        )
    }
}

export default Portfolio;