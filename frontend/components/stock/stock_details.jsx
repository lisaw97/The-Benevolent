import React from 'react';
import Graph from '../graph/graph';
import TransactionFormContainer from '../transaction_form/transaction_form_container';

class StockDetails extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     data: this.props.prices.intraday
        // }
        // this.render1DGraph = this.render1DGraph.bind(this);
    }

    componentDidMount() {
        this.props.fetchStock(this.props.match.params.symbol);
        this.props.fetchStockNews(this.props.match.params.symbol, 3);
        this.props.fetchIntradayPrices(this.props.match.params.symbol);
        this.props.fetch1YPrices(this.props.match.params.symbol);
    }

    renderNews() {
        return (
            <ul className='company-news-list'>
                {this.props.news.map((article, i) => {
                    return (
                        <li className='company-news-article' key={`article-${i}`}>
                            <div>
                                <a href={article.url}>{article.headline}</a>
                                <p>{article.summary}</p>
                            </div>
                            <img src={article.image} />
                        </li>
                    )
                })}
            </ul>
        );
    }

    render1DGraph() {
        // return (<Graph data={this.props.prices.intraday} name='intraday-stock-graph' />)
        // this.setState({data: this.props.prices})
    }

    render() {
        const { prices, stock } = this.props;
        if (!stock) {
            return null;
        } else {
            let close = 0;
            let dollarDiff = 0;
            let percentDiff = 0;
            if (prices.intraday) {
                if (prices.intraday.length > 0) {
                    close = prices.intraday[prices.intraday.length - 1].close;
                    let open = prices.intraday[0].close;
                    dollarDiff = close - open;
                    dollarDiff = parseFloat(Math.round(dollarDiff * 100) / 100).toFixed(2);
                    percentDiff = dollarDiff / open;
                    percentDiff = parseFloat(Math.round(percentDiff * 100) / 100).toFixed(2);
                }
            }
            
            return (
            <div className='stock-details-div'>
                
                <div className='stock-details-left'>

                    <div className='stock-graph'>
                        <h2 className='comp-name'>{stock.companyName}</h2>
                        <h1>${close}</h1>
                        <h3>${dollarDiff} ({percentDiff}%)</h3> 
                            
                            <Graph data={this.props.prices.intraday} name='intraday-stock-graph' dataKey='close'/>
                            {/* <Graph data={this.props.prices.year} name='intraday-stock-graph'/> */}
                            <ul className='time-list'>
                                <li><a onClick={this.render1DGraph}>1D</a></li>
                                <li>1W</li>
                                <li>1M</li>
                                <li>3M</li>
                                <li>1Y</li>
                                <li>5Y</li>
                            </ul>
                    </div>

                    <div className='stock-orders'>
                        <TransactionFormContainer symbol={stock.symbol} price={close} />
                        {/* <button className='watchlist-button'>Add To Watchlist</button> */}
                    </div>      
                                  
                </div>

                <div className='stock-about'>
                    <h2>About</h2>
                    <hr />
                    <p>{stock.description}</p>
                    <div className='company-info'>
                        <label>CEO <div>{stock.CEO}</div></label>
                        <label>Employees <div>{stock.employees}</div></label>
                        <label>Headquarters <div>{stock.city}, {stock.state}</div></label>
                        <label>Industry <div>{stock.industry}</div></label>
                    </div>
                </div>

                <div className='recent-news'>
                    <h2>Recent News</h2>
                    <hr />
                    {this.renderNews()}
                </div>

            </div>
            )
        }
        
    }
}

export default StockDetails;