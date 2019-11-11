import React from 'react';
import Graph from '../graph/graph';

class StockDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchStock(this.props.match.params.symbol);
        this.props.fetchStockNews(this.props.match.params.symbol, 3);
        this.props.fetchIntradayPrices(this.props.match.params.symbol);
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

    render() {
        // debugger

        const { stock } = this.props;

        if (!stock) {
            return null;
        } else {
            return (
            <div className='stock-details-div'>
                <div className='stock-details-left'>
                    <div className='stock-graph'>
                        <h2>{stock.companyName}</h2>
                        <Graph data={this.props.prices}/>
                    </div>
                    <div className='stock-about'>
                        <h2>About</h2>
                        <hr/>
                        <p>{stock.description}</p>
                        <div className='company-info'>
                            <label>CEO <div>{stock.CEO}</div></label>
                            <label>Employees <div>{stock.employees}</div></label>
                            <label>Headquarters <div>{stock.city}, {stock.state}</div></label>
                        </div>
                    </div>
                    <div className='recent-news'>
                        <h2>Recent News</h2>
                        <hr/>
                        {this.renderNews()}
                    </div>
                </div>
                <div className='stock-orders'>
                    <h2>Buy/Sell</h2>
                    <hr/>
                </div>
            </div>
            )
        }
        
    }
}

export default StockDetails;