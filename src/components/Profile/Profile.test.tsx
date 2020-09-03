import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAtrr } from '../../utils/test.utils';
import Profile from './Profile';

configure({
    adapter: new Adapter()
}) 

describe('Profile Component', () => {

    const user = {
        img: "https://placehold.it/40",
        firstName: "Dima",
        lastName: "Krysanov",
    }

    const wrapper = shallow( <Profile user={ user }/>)

    describe('has been rendered', () => {

        it('Profile Component has been rendered', () => {
            const component = findByTestAtrr(wrapper, 'profile');
            expect(component.length).toBe(1);
        })

        it('image has been rendered', () => {
            const component = findByTestAtrr(wrapper, 'profile_img');
            expect(component.length).toBe(1);
        })

        it('full name has been rendered', () => {
            const component = findByTestAtrr(wrapper, 'profile_full_name');
            expect(component.length).toBe(1);
        })

        it('edit profile info button has been rendered', () => {
            const component = findByTestAtrr(wrapper, 'profile_edit_profile_btn');
            expect(component.length).toBe(1);
        })
    })
})