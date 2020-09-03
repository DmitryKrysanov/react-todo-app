import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAtrr, storeFactory } from '../../utils/test.utils';
import Todo from './Todo';

configure({
    adapter: new Adapter()
}) 

describe('Todo Component', () => {
    const store = storeFactory({});
    const wrapper = shallow( <Todo store={store} />).dive().dive()

    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'Todo');
        expect(component.length).toBe(1);
    }); 
})
