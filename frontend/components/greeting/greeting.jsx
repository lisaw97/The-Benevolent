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
                <div>
                    <Link to='/signup'>Sign Up</Link>
                    <Link to='/login'>Log In</Link>
                </div>
            )
        }
    }
}


export default Greeting;