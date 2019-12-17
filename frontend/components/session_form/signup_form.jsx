import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            first_name: '',
            last_name: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors([]);
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
                <ul className='signup-errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        const { formType, navLink } = this.props;
        const formLabel = formType[0].toUpperCase() + formType.slice(1).toLowerCase();
        const navLinkLabel = navLink[0].toUpperCase() + navLink.slice(1).toLowerCase();
        return (
            <div className='signup-form-div'>
                <form onSubmit={this.handleSubmit}>
                    <h1 className='form-h1'>Make Your Money Move</h1>
                    <h2 className='form-h2'>The Benevolent lets you invest in companies you love, commission-free</h2>
                    <div className='signup-inputs-div'>
                        <div className='name'>
                            <input
                                type="text"
                                onChange={this.update('first_name')}
                                value={this.state.first_name}
                                placeholder="First name"
                                // required
                            />
                            <input
                                type="text"
                                onChange={this.update('last_name')}
                                value={this.state.last_name}
                                placeholder="Last Name"
                                // required
                            />
                        </div>
                        <input
                            className='signup-input'
                            type="text"
                            onChange={this.update('email')}
                            value={this.state.email}
                            placeholder="Email address"
                            // required
                        />
                        <input
                            className='signup-input'
                            type="text"
                            onChange={this.update('username')}
                            value={this.state.username}
                            placeholder="Username"
                            // required
                        />
                        <input 
                            className='signup-input'
                            type="password"
                            onChange={this.update('password')}
                            value={this.state.password}
                            placeholder="Password [min. 6 characters]"
                            // required
                        />
                        <button className='signup-form-button' type="submit">{formLabel}</button>
                        <p className='session-link-p'>
                            Already started? <Link className='session-nav-link' to={`/${navLink}`}>
                                                {navLinkLabel} to complete your application
                                            </Link>
                        </p>
                    </div>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default SignupForm;