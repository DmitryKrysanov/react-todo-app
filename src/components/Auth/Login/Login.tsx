import React, { Component } from 'react';
import classes from './Login.module.scss';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logIn } from '../../../redux/actions/authActions';

interface ConnectedProps {
    auth: any;
}

type ComponentProps = ConnectedProps & ReturnType<typeof mapDispatchToProps>;

class Login extends Component<ComponentProps> {

    public state = {
        email: '',
        password: '',
    }

    public handleEmailChange = (event: { currentTarget: { value: any; }; }) => {
        this.setState({
            email: event.currentTarget.value,
        })
    }

    public handlePasswordChange = (event: { currentTarget: { value: any; }; }) => {
        this.setState({
            password: event.currentTarget.value,
        })
    }

    public onSubmit = (event: { preventDefault: () => void; } ) => {
        event.preventDefault();
        this.props.logIn(this.state.email, this.state.password);
    }
    render() {
    return (
        <div className={ classes.login }>
            <h1>Log In</h1>
            <form onSubmit={ this.onSubmit }>
                <div className={ classes.input }>
                    <input
                        name="email"
                        className='input'
                        id="email"
                        placeholder="Email"
                        type="email"
                        onChange={ this.handleEmailChange }
                        value={ this.state.email }
             
                    />
                    {/* <small className="error_message">{errors.email && "Email is required"}</small> */}
                </div>
                <div className={ classes.input }>
                    <input
                        name="password"
                        className='input'
                        id="password"
                        placeholder="Password"
                        type="password"
                        onChange={ this.handlePasswordChange }
                        value={ this.state.password }
                    />
                    {/* <small className="error_message">{errors.password && "Password is required"}</small> */}
                </div>
                <button
                    className='btn btn__primary'
                    type="submit"
                >
                    Log In
                </button>
                { this.props.auth.error ? <p className="error_message">{this.props.auth.error}</p> : null }
            </form>
            {this.props.auth.uid ? <Redirect to='/' /> : null}
        </div>
    );
}
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    logIn: (email: string, password: string) => {
        return dispatch(logIn(email, password))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
