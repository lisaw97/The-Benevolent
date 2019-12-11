import { connect } from 'react-redux';
import Searchbar from './searchbar';

const mapStateToProps = (state) => ({
  allStocks: state.entities.stocks.allStocks
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
