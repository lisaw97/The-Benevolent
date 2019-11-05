import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const { currentUser, logout } = this.props;
        if (currentUser) {
            return (
                <form>
                    <h1>Welcome, {currentUser.username}</h1>
                    <button onClick={this.handleSubmit}>Log Out</button>
                </form>
            ) 
        } else {
            return (
                <div className='greeting-div'>
                    <h2 className='rh-logo'>Robinhood Clone</h2>
                    <div className='signup-login-buttons'>
                        <div><Link className='signup-button' to='/signup'>Sign Up</Link></div>
                        <div><Link className='login-button' to='/login'>Log In</Link></div>
                    </div>
                </div>
            )
        }
    }
}


export default Greeting;