import React from 'react';
import classes from './Header.module.scss';
import { logOut } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import IsAuth from './IsAuth/IsAuth';
import IsNotAuth from './IsNotAuth/IsNotAuth';
import { resetTodos } from '../../redux/actions/todoActions';
import { withRouter } from 'react-router-dom';

interface ConnectedProps {
    auth: any,

    location: any,
    history: any,
    match: any,
    staticContext: any
}

type ComponentProps = ConnectedProps & ReturnType<typeof mapDispatchToProps>;

const Header = (props: ComponentProps) => {

    const handleBackButton = () => {
        props.history.push('/');
    }

    return (
        <div className={classes.header}>
            { props.location.pathname === '/profile' 
            ? <button onClick={ handleBackButton }>Back</button> 
            : <h2>Todo</h2>
            }
            {props.auth.uid ? <IsAuth 
                logOut={props.logOut} 
                resetTodos={props.resetTodos} 
            /> : <IsNotAuth />}
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    logOut: () => {
        return dispatch(logOut())
    },
    resetTodos: () => {
        return dispatch(resetTodos())
    }
})

const headerWithRouter = withRouter(Header)
export default connect(mapStateToProps, mapDispatchToProps)(headerWithRouter);