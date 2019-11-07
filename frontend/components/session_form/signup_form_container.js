import { signup, clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignupForm from './signup_form';

const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'signup',
    navLink: 'login'
});

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: errors => dispatch(clearErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);