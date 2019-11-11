import React from 'react';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        
        this.props.fetchStocks();
        // let symbols = Object.keys(this.props.stocks);
        // debugger
        // for (let i = 0; i < symbols.length; i++) {
            // debugger
            this.props.fetchNews('aapl', 3);
            
        // }
        // debugger
    }
    
    renderStocks() {
        // debugger
        let symbols = Object.keys(this.props.stocks);
        
        return (
            <ul className='stocks-list'>
                {symbols.map((symbol, i) => {
                    return (
                        <li className='stock' key={`stock-${i}`}>
                            <div className='stock-left'>
                                <div className='symbol'>{symbol}</div>
                                <div className='shares'>{this.calculateShares(this.props.stocks[symbol].id)} shares</div>
                            </div>
                            {/* <div className='stock-right'> */}
                                <div className='small-graph'>graph</div>
                                <div className='price'>price</div>
                            {/* </div> */}
                        </li>
                    )
                })}
            </ul>
        );
    }

    calculateShares(stock_id) {
        const { transactions } = this.props;
        let shares = 0;
        let trans = Object.values(transactions);
        trans.forEach( transaction => {
            if (transaction.stock_id === stock_id) {
                shares = shares + transaction.shares;
            }
        });
        return shares;
    }

    renderNews() {
        return (
            <ul className='general-news-list'>
                {this.props.news.map((article, i) => {
                    return (
                        <li className='news-article' key={`article-${i}`}>
                            <div>
                                <a href={article.url}>{article.headline}</a>
                                <p>{article.summary}</p>
                            </div>
                            <img src={article.image}/>
                        </li>
                    )
                })}
            </ul>
        );
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;