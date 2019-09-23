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

});