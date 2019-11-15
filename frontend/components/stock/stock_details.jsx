import React from 'react';
import GraphContainer from '../graph/graph_container';
import TransactionFormContainer from '../transaction_form/transaction_form_container';

class StockDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oneYear: [],
            parsedData: [],
            time: '1D'
        }
        this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchStock(this.props.match.params.symbol);
        this.props.fetchStockNews(this.props.match.params.symbol, 3);
        this.props.fetchIntradayPrices(this.props.match.params.symbol);
        this.props.fetch1YPrices(this.props.match.params.symbol).then(
            res => this.setState({ oneYear: res.prices, parsedData: res.prices })
        )

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

    handleTimeChange(e) {
        let time = e.currentTarget.innerText;
        if (time === '5Y') {
            this.props.fetch5YPrices(this.props.match.params.symbol).then(
                res => this.setState({ parsedData: res.prices, time: time })
            )
        } else if (time === '1Y') {
            this.setState({ parsedData: this.state.oneYear, time: time });
        } else if (time === '3M') {
            this.setState({ parsedData: this.state.oneYear.slice(185), time: time });
        } else if (time === '1M') {
            this.setState({ parsedData: this.state.oneYear.slice(227), time: time });
        } else if (time === '1W') {
            this.setState({ parsedData: this.state.oneYear.slice(243), time: time });
        } else {
            this.setState({ parsedData: this.props.prices.intraday, time: time });
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
        const { stock } = this.props;
        
        if (!stock || this.state.oneYear.length === 0) {
            return null;
        } 
        let {parsedData} = this.state;
        if (parsedData.length === 0) {
            parsedData = this.props.prices.year;
        }

        let close = parsedData[parsedData.length - 1].close;
        let open = parsedData[0].close;
        let dollarDiff = close - open;
        dollarDiff = parseFloat(Math.round(dollarDiff * 100) / 100).toFixed(2);
        let percentDiff = dollarDiff / open;
        percentDiff = parseFloat(Math.round(percentDiff * 100) / 100).toFixed(2);

        return (
            <div className='stock-details-div'>
                
                <div className='stock-details-left'>

                    <div className='stock-graph'>
                        <h2 className='comp-name'>{stock.companyName}</h2>
                        <h1>${close}</h1>
                        <h3>${dollarDiff} ({percentDiff}%)</h3> 
                            
                            <GraphContainer data={this.state.parsedData} name='intraday-stock-graph' dataKey='close'/>
                            <ul className='time-list'>
                            <li className={this.setName('1D')} onClick={this.handleTimeChange}>1D</li>
                            <li className={this.setName('1W')} onClick={this.handleTimeChange}>1W</li>
                            <li className={this.setName('1M')} onClick={this.handleTimeChange}>1M</li>
                            <li className={this.setName('3M')} onClick={this.handleTimeChange}>3M</li>
                            <li className={this.setName('1Y')} onClick={this.handleTimeChange}>1Y</li>
                            <li className={this.setName('5Y')} onClick={this.handleTimeChange}>5Y</li>
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

export default StockDetails;