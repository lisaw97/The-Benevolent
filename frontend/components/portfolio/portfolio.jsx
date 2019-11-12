import React from 'react';
import { Link } from 'react-router-dom';
import Graph from '../graph/graph';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {     
        this.props.fetchStocks();
        this.props.fetchGeneralNews();
    }
    

    renderStocks() {
        let symbols = Object.values(this.props.transactions);
        symbols = symbols.map(item => item.symbol);
        // debugger
        // if (symbols.length === 0) {
        //     return null;
        // } else { 
        let prices = this.props.fetchIntradayPrices('TSLA');
        return (
            <ul className='stocks-list'>
                {symbols.map((symbol, i) => {
                    let data = this.props.fetchIntradayPrices(symbol);
                    return (
                        <li key={`stock-${i}`}>
                            <Link className='stock' to={`/stocks/${symbol}`}>
                            <div className='stock-left'>
                                <div className='symbol'>{symbol}</div>
                                <div className='shares'>{this.calculateShares(symbol)} shares</div>
                            </div>
                            <Graph data={data} name='small-graph'/>
                            {/* <div className='small-graph'>graph</div> */}
                            <div className='price'>price</div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        );
    // }
        
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

    renderWatchlist() {
        let symbols = Object.values(this.props.watchlist);
        symbols = symbols.map(item => item.symbol);

        // debugger
        return (
            <ul className='stocks-list'>
                {symbols.map((symbol, i) => {
                    return (
                        <li key={`stock-${i}`}>
                            <Link className='stock' to={`/stocks/${symbol}`}>
                                <div className='stock-left'>
                                    <div className='symbol'>{symbol}</div>
                                    {/* <div className='shares'>{this.calculateShares(symbol)} shares</div> */}
                                </div>
                                <div className='small-graph'>graph</div>
                                <div className='price'>price</div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        );
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

    render() {
        const { stocks, news } = this.props;
        return (
            <div className='portfolio-main-div'>
                <div className='portfolio-info-div'>
                    <div className='portfolio-div'>
                        <h2>Balance</h2>
                        <div>[Insert Graph Here]</div>
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