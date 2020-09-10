import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import classes from './Signup.module.scss';
import { connect } from 'react-redux';
import { signUp } from '../../../redux/actions/authActions';
import { Redirect } from 'react-router-dom';
import { 
    composeValidators, 
    required, 
    email, 
    password, 
    passwordMinLength, 
    minLengthText, 
    maxLengthText 
} from '../../../utils/validation.utils';


interface SignupForm {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

interface ConnectionProps {
    auth: any
}

type ComponentProps = ConnectionProps & ReturnType<typeof mapDispatchToProps>

class Signup extends Component<ComponentProps>{

    public handleFormSubmit = (data: SignupForm) => {
        this.props.signUp(data)
    }

    render() {
        return (
            <div className={ classes.signup }>
                <h1>Sign Up</h1>
                <Form
                    onSubmit={ this.handleFormSubmit }
                    render={({ handleSubmit, submitting }) => (
                        <form onSubmit={ handleSubmit }>
                            <Field 
                            name="firstName" 
                            validate={ composeValidators(
                                required, 
                                minLengthText, 
                                maxLengthText) 
                                }>
                                {({ input, meta }) => (
                                    <div className={ classes.input }>
                                        <input 
                                            className="input" 
                                            { ...input } 
                                            type="text" 
                                            placeholder="First Name" 
                                            maxLength={ 140 } />
                                        { meta.error && meta.touched && <small className="error_message">{meta.error}</small> }
                                    </div>
                                )}
                            </Field>
                            <Field 
                            name="lastName" 
                            validate={ composeValidators(
                                required, 
                                minLengthText, 
                                maxLengthText) 
                                }>
                                {({ input, meta }) => (
                                    <div className={ classes.input }>
                                        <input 
                                        className="input" 
                                        { ...input } 
                                        type="text" 
                                        placeholder="Last Name" 
                                        maxLength={ 140 } />
                                    {meta.error && meta.touched && <small className="error_message">{meta.error}</small>}
                                    </div>
                                )}
                            </Field>
                            <Field 
                            name="email" 
                            validate={ composeValidators(
                            required, 
                            email) 
                            }>
                                {({ input, meta }) => (
                                    <div className={ classes.input }>
                                        <input 
                                        className="input" 
                                        { ...input } 
                                        type="email" 
                                        placeholder="Email" />
                                    { meta.error && meta.touched && <small className="error_message">{meta.error}</small> }
                                    </div>
                                )}
                            </Field>
                            <Field 
                            name="password" 
                            validate={ composeValidators(
                                required, 
                                password, 
                                passwordMinLength) 
                            }>
                                {({ input, meta }) => (
                                    <div className={ classes.input }>
                                        <input 
                                        className="input" 
                                        {...input} 
                                        type="password" 
                                        placeholder="Password" />
                                    { meta.error && meta.touched && <small className="error_message">{ meta.error }</small> }
                                    </div>
                                )}
                            </Field>
                            <button className="btn btn__primary" type="submit" disabled={ submitting }>
                                Sign Up
                        </button>
                            { this.props.auth.error ? <p className="error_message">{ this.props.auth.error }</p> : null }
                        </form>
                    )}
                />
                { this.props.auth.uid ? <Redirect to='/' /> : null }
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    signUp: (newUser: SignupForm) => {
        dispatch(signUp(newUser))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
