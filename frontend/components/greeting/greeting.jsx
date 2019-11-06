import React from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from '../svg/svg_icons';

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
        const { currentUser } = this.props;
        if (currentUser) {
            return (
                <form className='greeting-div'>
                    <div className='welcome'>
                        <Link to='/'><SVGIcon name='icon' width={80} height={50} /></Link>
                        <h1 className='welcome-msg'>Welcome, {currentUser.username}</h1>
                    </div>
                    <button className='logout-button' onClick={this.handleSubmit}>Log Out</button>
                </form>
            ) 
        } else {
            return (
                <div className='greeting-div'>
                    <Link className='rh-logo' to='/'>Robinhood Clone<SVGIcon name='icon' width={80} height={50}/></Link>
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