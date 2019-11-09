import { login, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginForm from './login_form';
import { demoStateOff } from '../../actions/ui_actions';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'login',
    navLink: 'signup',
    demoUser: state.ui.demoUser
});

const mapDispatchToProps = dispatch => {
    debugger
    return {
    processForm: user => dispatch(login(user)),
    demoStateOff: demoUser => dispatch(demoStateOff(demoUser)),
    clearErrors: () => dispatch(clearErrors()),
}};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);