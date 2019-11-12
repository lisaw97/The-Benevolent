import React from 'react';
import { Link } from 'react-router-dom';
import GraphContainer from '../graph/graph_container';
import StockItemContainer from '../stock/stock_item_container';

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
        return (symbols.map( (symbol, i) => {
            return (<StockItemContainer key={i} symbol={symbol} shares={this.calculateShares(symbol)}/>)
        }) )    
    }

    renderWatchlist() {
        let symbols = Object.values(this.props.watchlist);
        symbols = symbols.map(item => item.symbol);
        return (symbols.map((symbol, i) => {
            return (<StockItemContainer key={i} symbol={symbol} shares={this.calculateShares(symbol)} />)
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

    render() {
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