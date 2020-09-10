import React, { Component } from 'react';
import classes from './UserProfile.module.scss';
import Header from '../Header/Header';

class UserProfile extends Component {

    state = {
        img: "",
        // img: "https://placehold.it/80",
        firstName: "Dima",
        lastName: "Krysanov",
    }

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
                        {this.state.img
                            ? <img src={this.state.img} alt="avatar" />
                            : <div className={classes.img_placeholder}>
                                <h1>{this.state.firstName[0] + this.state.lastName[0]}</h1>
                            </div>}

                    </div>
                    <p><strong>{`${this.state.firstName} ${this.state.lastName}`}</strong></p>
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

export default UserProfile;