import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAtrr } from '../../utils/test.utils';
import NewTodo from './NewTodo';

configure({
    adapter: new Adapter()
}) 

describe('NewTodo Component', () => {
    const wrapper = shallow( <NewTodo />)

    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'NewTodo');
        expect(component.length).toBe(1);
    }); 
})
