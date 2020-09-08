import React from 'react';
import { shallow } from 'enzyme';
import Auth from './Auth';

describe('render Auth component', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallow(<Auth />);
        return wrapper;
    })

    describe('renders without errors', () => {
        
        it('renders "auth"', () => {
            const component = wrapper.find('.auth');
            expect(component.length).toBe(1);
        })

        it('renders "auth_image"', () => {
            const image = wrapper.find('.auth_image');
            expect(image.length).toBe(1);
        })

        it('renders "auth_content"', () => {
            const content = wrapper.find('.auth_content');
            expect(content.length).toBe(1);
        })
    })
})