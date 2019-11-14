import React from 'react';
import Graph from '../graph/graph';
import TransactionFormContainer from '../transaction_form/transaction_form_container';

class StockDetails extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     buy: true,
        //     time: ""
        // }
        // this.setBuy = this.setBuy.bind(this);
    }

    componentDidMount() {
        this.props.fetchStock(this.props.match.params.symbol);
        this.props.fetchStockNews(this.props.match.params.symbol, 3);
        this.props.fetchIntradayPrices(this.props.match.params.symbol);
        // this.props.fetch1YPrices(this.props.match.params.symbol);
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

    // setBuy(boolean) {
    //     // debugger
    //     this.setState({ buy: boolean });
    //     return (
    //         <div>
                
    //             <div className='buying-power'>$10022.33 Buying Power Available</div>
    //         </div>
    //     );
    // }

    // renderForm() {
    //     // debugger
    //     if (this.state.buy) {
    //         return (
    //             <div className='buying-power'>$10022.33 Buying Power Available</div>
    //         )
    //     } else {
    //         return (
    //             <div>
    //                 Hi
    //             </div> 
    //         )
    //     } 
    // }
    render() {
        const { intradayPrices, stock } = this.props;

        let close = 0;
        if (intradayPrices.length > 0) {
            close = intradayPrices[intradayPrices.length - 1].close;
        }

        if (!stock) {
            return null;
        } else {
            // debugger
            return (
            <div className='stock-details-div'>
                
                <div className='stock-details-left'>
                    <div className='stock-graph'>
                        <h2 className='comp-name'>{stock.companyName}</h2>
                        <h1>${close}</h1>
                            {/* <button onClick={this.handleClick}>{this.state.time}</button> */}
                            <Graph data={this.props.intradayPrices} name='intraday-stock-graph'/>
                            <ul className='time-list'>
                                <li>1D</li>
                                <li>1W</li>
                                <li>1M</li>
                                <li>3M</li>
                                <li>1Y</li>
                                <li>5Y</li>
                            </ul>
                            {/* <hr />  */}
                    </div>
                    <div className='stock-about'>
                        <h2>About</h2>
                        <hr/>
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
                        <hr/>
                        {this.renderNews()}
                    </div>
                </div>
                <div className='stock-orders'>
                    {/* <h2 onClick={() => this.setBuy(true)}>Buy</h2>
                    <h2 onClick={() => this.setBuy(false)}>Sell</h2> */}
                    <TransactionFormContainer symbol={stock.symbol} price={close}/>
                    {/* {this.renderForm()} */}
                    {/* <div className='buying-power'>$10022.33 Buying Power Available</div> */}
                {/* <button className='watchlist-button'>Add To Watchlist</button> */}
                </div>
            </div>
            )
        }
        
    }
}

export default StockDetails;