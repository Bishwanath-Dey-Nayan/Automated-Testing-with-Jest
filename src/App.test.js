import { shallow } from 'enzyme';
import App from './App';
import { testStore } from '../Utils/index';
import React from 'react';



//checking child component that is connected with the parent
const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    console.log(wrapper.debug());
    return wrapper;
}

describe('AppComponent', () => {
    let wrapper;

    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example',
                body: 'some text'
            }, {
                title: 'Example',
                body: 'some text'
            }, {
                title: 'Example',
                body: 'some text'
            }]
        };
        wrapper = setUp(initialState);
    });

    it('should render without error',()=>
    {
        const component = wrapper.find(`[data-test='appComponent']`);
        expect(component.length).toBe(1);
    });

    //test script for testing a mehtod 
    it('button_Update function updated',() =>
    {
        //creating instance of the component "App"
        const classInstance = wrapper.instance();
        //firing the method
        classInstance.button_Update();
        //reading the state variable
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(false);
    })

});