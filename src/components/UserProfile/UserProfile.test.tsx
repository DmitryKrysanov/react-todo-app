import React from 'react';
import { shallow } from 'enzyme';
import UserProfile from './UserProfile';

describe('User Profile Component', () => {

    const user = {
        img: "https://placehold.it/40",
        firstName: "Dima",
        lastName: "Krysanov",
    }

    let wrapper: any;
    let store: any;

    beforeEach(() => {
        wrapper = shallow(<UserProfile />)
    })

    describe('should be rendered', () => {

        it('Profile Component should be rendered', () => {
            const component = wrapper.find('.profile');
            expect(component.length).toBe(1);
        })

        it('image should be rendered', () => {
            const image = wrapper.find('.profile_img');
            expect(image.length).toBe(1);
        })

        it('full name should be rendered', () => {
            const fullName = wrapper.find('.profile_full_name');
            expect(fullName.length).toBe(1);
        })

        it('edit profile info button should be rendered', () => {
            const button = wrapper.find('.profile_edit_profile_btn');
            expect(button.length).toBe(1);
        })
    })
})