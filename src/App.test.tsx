import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter()
}) 

describe('App Component', () => {

    it('Should render without errors', () => {
        const component = shallow(<App />).find(".app");
        expect(component.length).toBe(1);
    }); 
})
