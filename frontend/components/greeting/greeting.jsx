import React from 'react';
import { Link } from 'react-router-dom';
import SVGIcon from '../svg/svg_icons';
import Octicon, { Mail, MarkGithub } from "@primer/octicons-react";
import { IoLogoLinkedin } from "react-icons/io";

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
                    <Link className='rh-logo' to='/portfolio'><SVGIcon name='icon' width={35} height={30} />Welcome, {currentUser.first_name}</Link>
                    <div onClick={this.handleSubmit}><Link className='logout-button' to='/'>Log Out</Link></div>
                </form>
            ) 
        } else {
            return (
              <div className="greeting-div">
                <Link className="rh-logo" to="/">
                  Robinhood Clone
                  <SVGIcon name="icon" width={35} height={30} />
                </Link>
                <Octicon icon={MarkGithub} size="30px" />
                <Octicon icon={Mail} size="30px" />
                <IoLogoLinkedin size="30px" />
                <div className="signup-login-buttons">
                  <div>
                    <Link className="signup-button" to="/signup">
                      Sign Up
                    </Link>
                  </div>
                  <div>
                    <Link className="login-button" to="/login">
                      Log In
                    </Link>
                  </div>
                  <div>
                    <button className="demo-button" onClick={this.handleDemo}>
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            );
        }
        
    }
}

export default Greeting;