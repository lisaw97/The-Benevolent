import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'login',
    navLink: 'signup'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);