import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import configureStore from "redux-mock-store";
// import { logIn } from '../../../redux/actions/authActions';

describe('Login component', () => {
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
        wrapper = shallow(<Login store={store} />).dive().dive();
    });

    describe('renders without errors', () => {

        it('should render login container', () => {
            const component = wrapper.find('.login');
            expect(component.length).toBe(1)
        });

        it('should render title h1', () => {
            const header = wrapper.find('h1');
            expect(header.length).toBe(1)
        });

        it('should render email and password input', () => {
            const inputs = wrapper.find('input');
            expect(inputs.length).toBe(2)
        });

        it('should render submit button', () => {
            const button = wrapper.find('button');
            expect(button.length).toBe(1)
        });

        it('should render error message', () => {
            const errorMessage = wrapper.find('.error_message');
            expect(errorMessage.length).toBe(1);
        });
    });

    it('button title should be "Log In"', () => {
        const title = "Log In";
        const button = wrapper.find('button');
        expect(button.text()).toBe(title)
    });

    it('error message disappears if there is no error message from the server', () => {
        wrapper.setProps({ auth: { error: null } })
        const errorMessage = wrapper.find('.error_message');
        expect(errorMessage.length).toBe(0);
    })

    it('should submit form by clicking on button', async () => {
        const emailInput = wrapper.find('input[type="email"]');
        const passwordInput = wrapper.find('input[type="password"]');
        const submitButton = wrapper.find('button[type="submit"]');

        emailInput.simulate('change', { currentTarget: { value: 'd@d.com' } });
        passwordInput.simulate('change', { currentTarget: { value: '123d' } });
        submitButton.simulate('submit');

        expect(wrapper.state().email).toEqual('d@d.com');
        expect(wrapper.state().password).toEqual('123d');
        expect.assertions(2);
        // try {
        //     await logIn('d@d.com', '123d');
        // } catch (err) {
        //     console.log("err")
        //     expect(err).toEqual({
        //         error: 'User not found'
        //       });
        //     }
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

        it('Login props should be a function', () => {
            const componentLoginProps = wrapper.instance().props.logIn;
            expect(componentLoginProps).toBeInstanceOf(Function);
        });
    });
});
