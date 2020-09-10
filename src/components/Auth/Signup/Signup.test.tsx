import React from 'react';
import { shallow } from 'enzyme';
import Signup from './Signup';
import configureStore from "redux-mock-store";

describe('Signup component', () => {
    let wrapper: any;
    let store: any;
    const mockStore = configureStore([]);

    beforeEach(() => {
        store = mockStore({
            auth: {
                uid: 'uid',
                token: 'token',
                error: "error message"
            },
        })
        wrapper = shallow(<Signup store={store} />).dive().dive();
    });

    describe('renders without errors', () => {

        it('should render signup container', () => {
            const component = wrapper.find('.signup');
            expect(component.length).toBe(1)
        });

        it('should render title h1', () => {
            const header = wrapper.find('h1');
            expect(header.length).toBe(1)
        });

        it('should render inputs', () => {
           
        });

        it('should render submit button', () => {
            
        });

        it('should render error message', () => {
          
        });
    });

    it('button title should be "Sign Up"', () => {
       
    });

    it('error message disappears if there is no error message from the server', () => {
      
    })

    it('should submit form by clicking on button', async () => {
       
    });

    describe('Redux props', () => {

        it('Auth props should be equal expectedAuthProps', () => {
            const expectedAuthProps = {
                uid: 'uid',
                token: 'token',
                error: 'error message'
            };
            const componentAuthProps = wrapper.instance().props.auth;
            expect(componentAuthProps).toEqual(expectedAuthProps);
        });

        it('Signup props should be a function', () => {
            const componentLoginProps = wrapper.instance().props.signUp;
            expect(componentLoginProps).toBeInstanceOf(Function);
        });
    });
});
