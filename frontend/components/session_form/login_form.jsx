import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const { errors, formType, navLink } = this.props;
        const formLabel = formType[0].toUpperCase() + formType.slice(1).toLowerCase();
        const navLinkLabel = navLink[0].toUpperCase() + navLink.slice(1).toLowerCase();
        return (
            <div className='session-form-div'>
                <form className='transparent-background' onSubmit={this.handleSubmit}>
                    <h1 className='login-form-h1'>Welcome to Robinhood</h1>
                    {/* {this.renderErrors()} */}
                    {/* <h2 className='form-h2'>Robinhood lets you invest in companies you love, commission-free</h2> */}
                    <div className='session-inputs-div'>
                        <label className='login-label'>Username</label>
                        <input
                            className='session-input'
                            type="text"
                            onChange={this.update('username')}
                            value={this.state.username}
                            // placeholder="Username"
                            // required
                        />
                        <label className='login-label'>Password</label>
                        <input
                            className='session-input'
                            type="password"
                            onChange={this.update('password')}
                            value={this.state.password}
                            // placeholder="Password"
                            // required
                        />
                        <button className='session-button' type="submit">{formLabel}</button>
                        <p className='session-link-p'>
                            New to Robinhood? <Link className='session-nav-link' to={`/${navLink}`}>
                                {navLinkLabel} to complete your application
                                            </Link>
                        </p>
                    </div>
                </form>
                {/* <ul>
                    {errors.map((error, i) => {
                        <li key={`error-${i}`}>{error}</li>
                    })}
                </ul> */}
            </div>
        )
    }
}

export default LoginForm;