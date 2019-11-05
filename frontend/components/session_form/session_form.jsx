import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
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

    render() {
        const { errors, formType, navLink } = this.props;
        const formLabel = formType[0].toUpperCase() + formType.slice(1).toLowerCase();
        const navLinkLabel = navLink[0].toUpperCase() + navLink.slice(1).toLowerCase();
        return (
            <div className='session-form-div'>
                <form onSubmit={this.handleSubmit}>
                    <h1 className='form-h1'>Welcome to Robinhood</h1>
                    <h2 className='form-h2'>Robinhood lets you invest in companies you love, commission-free</h2>
                    <div className='session-inputs-div'>
                        <input
                            className='session-input'
                            type="text"
                            onChange={this.update('username')}
                            value={this.state.username}
                            placeholder="Username"
                        />
                        <input 
                            className='session-input'
                            type="password"
                            onChange={this.update('password')}
                            value={this.state.password}
                            placeholder="Password"
                        />
                        <button className='session-button' type="submit">{formLabel}</button>
                        <p className='session-link-p'>
                            Already started? <Link className='session-nav-link' to={`/${navLink}`}>
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

export default SessionForm;