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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>{formType} Form</h1>
                    <label>Username:
                        <input 
                            type="text"
                            onChange={this.update('username')}
                            value={this.state.username}
                        />
                    </label>
                    <label>Password:
                        <input 
                            type="password"
                            onChange={this.update('password')}
                            value={this.state.password}
                        />
                    </label>
                    <button type="submit">{formType}</button>
                    <Link to={`/${navLink}`}>{navLink}</Link>
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