import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { storeFactory, findByTestAtrr } from '../../../utils/test.utils';
import TodoListItem from './TodoListItem';
import {middleware} from './../../../redux/store'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

configure({
    adapter: new Adapter()
}) 

describe('TodoListItem Component', () => {

    const store = storeFactory({});
    // const wrapper = shallow(<TodoListItem props={store}/>).dive()


    it('Should render without errors', () => {
        // const component = findByTestAtrr(wrapper, 'Todo');
        // expect(component.length).toBe(1);
    }); 
})
