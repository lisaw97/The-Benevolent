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
        this.handleDemo = this.handleDemo.bind(this);
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
        if (this.props.errors.length > 0) {
            return (
                <ul className='login-errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    handleDemo(e) {
        e.preventDefault();
        this.displayDemoUser('guest', 0);
    }

    displayDemoUser(username, n) {
        if (n < username.length) {
            let curr = username.substring(0, n + 1);
            this.setState({ username: curr });
            n++;
            setTimeout( () => { this.displayDemoUser(username, n) }, 100);
        } else {
            this.displayDemoPassword('password', 0);
        }
    }

    displayDemoPassword(password, n) {
        if (n < password.length) {
            let curr = password.substring(0, n + 1);
            this.setState({ password: curr });
            n++;
            setTimeout(() => { this.displayDemoPassword(password, n) }, 100);
        } else {
            const demoUser = { username: 'guest', password: 'password' };
            this.props.processForm(demoUser);
        }
    }

    render() {
        const { formType, navLink } = this.props;
        const formLabel = formType[0].toUpperCase() + formType.slice(1).toLowerCase();
        const navLinkLabel = navLink[0].toUpperCase() + navLink.slice(1).toLowerCase();
        return (
            <div className='session-form-div'>
                <form className='transparent-background' onSubmit={this.handleSubmit}>
                    <h1 className='login-form-h1'>Welcome to Robinhood</h1>
                    <div className='session-inputs-div'>
                        <label className='login-label'>Username</label>
                        <input
                            className='session-input'
                            type="text"
                            onChange={this.update('username')}
                            value={this.state.username}
                            // required
                        />
                        <label className='login-label'>Password</label>
                        <input
                            className='session-input'
                            type="password"
                            onChange={this.update('password')}
                            value={this.state.password}
                            // required
                        />
                        <p className='session-link-p'>
                            New to Robinhood? <Link className='session-nav-link' to={`/${navLink}`}>
                                {navLinkLabel} to complete your application
                                            </Link>
                        </p>
                        <button className='session-button' type="submit">{formLabel}</button>
                        <button className='session-demo-button' onClick={this.handleDemo}>Demo</button>
                        {this.renderErrors()}
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;