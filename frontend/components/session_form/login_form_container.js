import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './login_form';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'login',
    navLink: 'signup',
    demoUser: state.ui.demoUser
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);