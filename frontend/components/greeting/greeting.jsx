import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import SVGIcon from '../svg/svg_icons';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoUser: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logout();
    }

    handleDemo() {
        this.props.demoStateOn( {demoUser: true}) ;
        window.location.hash = '/login';
    }

    render() {
        const { currentUser } = this.props;
        if (currentUser) {
            return (
                <form className='greeting-div'>
                    <Link className='rh-logo' to='/'><SVGIcon name='icon' width={35} height={30} />Welcome, {currentUser.username}</Link>
                    <div onClick={this.handleSubmit}><Link className='logout-button' to='/'>Log Out</Link></div>
                    {/* <button className='logout-button' onClick={this.handleSubmit}>Log Out</button> */}
                </form>
            ) 
        } else {
            return (
                <div className='greeting-div'>
                    <Link className='rh-logo' to='/'>Robinhood Clone<SVGIcon name='icon' width={35} height={30}/></Link>
                    <div className='signup-login-buttons'>
                        <div><Link className='signup-button' to='/signup'>Sign Up</Link></div>
                        <div><Link className='login-button' to='/login'>Log In</Link></div>
                        <div><button className='demo-button' onClick={this.handleDemo}>Demo</button></div>
                    </div>
                </div>
            )
        }
        
    }
}


export default Greeting;