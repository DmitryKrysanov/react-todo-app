import React, { Component } from 'react';
import classes from './UserProfile.module.scss';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actions/userActions';

interface ConnectedProps {
    user: {
        img: string,
        firstName: string,
        lastName: string,
    }
}

type ComponentProps = ConnectedProps;

class UserProfile extends Component<ComponentProps> {

    render() {
        return (
            <div>
                <Header />
                <div
                    className={classes.profile}
                >
                    <div
                        className={classes.profile_img}
                    >
                        {this.props.user.img
                            ? <img src={this.props.user.img} alt="avatar" />
                            : <div className={classes.img_placeholder}>
                                <h1>{this.props.user.firstName[0] + this.props.user.lastName[0]}</h1>
                            </div>}

                    </div>
                    <p><strong>{`${this.props.user.firstName} ${this.props.user.lastName}`}</strong></p>
                    <button
                        className='btn btn__secondary'
                    >
                        Edit
            </button>
                </div>
            </div>

        );
    }
};

const mapStateToProps = (state: any) => {
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps)(UserProfile);