import { connect } from 'react-redux';
import Searchbar from './searchbar';

const mapStateToProps = (state, ownProps) => ({
  allStocks: state.entities.stocks.allStocks
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
