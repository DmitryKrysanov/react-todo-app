import React from 'react';
import classes from './Profile.module.scss';

const Profile = (props: any) => {
    const { firstName, lastName, img } = props.user
    return (
        <div 
            className={ classes.profile } 
            data-test="profile"
            >
            <div 
                className={classes.profile_img } 
                data-test="profile_img"
                >
                <img src={ img } alt="avatar"/>
            </div>
            <p data-test="profile_full_name"><strong>{`${ firstName } ${ lastName }`}</strong></p>
            <button 
                className='btn btn__secondary' 
                data-test="profile_edit_profile_btn"
                >
                Edit
            </button>
        </div>
    );
};

export default Profile;