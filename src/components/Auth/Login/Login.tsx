import React, { Component } from 'react';
import classes from './Login.module.scss';
import { Redirect } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { connect } from 'react-redux';
import { logIn } from '../../../redux/actions/authActions';

interface ConnectedProps {
    auth: any;
}

interface LoginForm {
    email: string,
    password: string
  };

type ComponentProps = ConnectedProps & ReturnType<typeof mapDispatchToProps>;

class Login extends Component<ComponentProps> {

    public handleFormSubmit = (data: LoginForm) => {
        this.props.logIn(data.email, data.password);
    }
    render() {
        return (
            <div className={classes.login}>
                <h1>Log In</h1>
                <Form
                    onSubmit={this.handleFormSubmit}
                    validate={values => {
                        const errors: any = {}
                        if (!values.email) {
                            errors.email = 'Email is required'
                        }
                        if (!values.password) {
                            errors.password = 'Password is required'
                        }
                        return errors
                    }}
                    render={({ handleSubmit, submitting }) => (
                        <form onSubmit={ handleSubmit }>
                                <Field name="email">
                                    {({ input, meta }) => (
                                        <div className={classes.input}>
                                            <input className="input" {...input} type="email" placeholder="Email" />
                                            {meta.error && meta.touched && <small className="error_message">{meta.error}</small>}
                                        </div>
                                    )}
                                </Field>
                                <Field name="password">
                                    {({ input, meta }) => (
                                        <div className={classes.input}>
                                            <input className="input" {...input} type="password" placeholder="Password" />
                                            {meta.error && meta.touched && <small className="error_message">{meta.error}</small>}
                                        </div>
                                    )}
                                </Field>
                            <button className="btn btn__primary" type="submit" disabled={submitting}>
                                Log In
                        </button>
                            {this.props.auth.error ? <p className="error_message">{this.props.auth.error}</p> : null}
                        </form>
                    )}
                />
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
