import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAtrr } from './utils/test.utils';

configure({
    adapter: new Adapter()
}) 

describe('App Component', () => {
    const wrapper = shallow(<App />)

    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'App');
        expect(component.length).toBe(1);
    }); 
})
