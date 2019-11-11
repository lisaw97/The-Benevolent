import React from 'react';

class StockDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchStock(this.props.stock.symbol);
        this.props.fetchNews(this.props.stock.symbol, 3);
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
        return (
            <div className='stock-details-div'>
                <div className='stock-details-left'>
                    <div className='stock-graph'>
                        <h2>{stock.companyName}</h2>
                        <div>[Insert Graph Here]</div>
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

export default StockDetails;