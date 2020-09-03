import React from 'react';
import classes from './Header.module.scss';
import { logOut } from '../../redux/actions/authActions';
import { connect } from 'react-redux';
import IsAuth from './IsAuth/IsAuth';
import IsNotAuth from './IsNotAuth/IsNotAuth';
import { resetTodos } from '../../redux/actions/todoActions';

interface ConnectedProps {
    auth: any
}

type ComponentProps = ConnectedProps & ReturnType<typeof mapDispatchToProps>;

const Header = (props: ComponentProps) => {

    return (
        <div className={classes.header}>
            <h2>Todo</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);