import { connect } from 'react-redux';
import { logout, login } from '../../actions/session_actions';
import Greeting from './greeting';
import { demoStateOn } from '../../actions/ui_actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    demoUser: state.ui.demoUser
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    demoStateOn: demoUser => dispatch(demoStateOn(demoUser))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));
