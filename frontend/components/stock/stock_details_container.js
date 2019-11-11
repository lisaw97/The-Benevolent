import { connect } from 'react-redux';
import { fetchNews } from '../../actions/news_actions';
import { fetchStock } from '../../actions/stock_actions';
import StockDetails from './stock_details';

const mapStateToProps = (state, ownProps) => ({
    stock: state.entities.stocks[ownProps.match.params.symbol],
    news: state.entities.news
});

const mapDispatchToProps = dispatch => ({
    fetchStock: symbol => dispatch(fetchStock(symbol)),
    fetchNews: (symbol, last) => dispatch(fetchNews(symbol, last))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockDetails);