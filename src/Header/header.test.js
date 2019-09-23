import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { isTSAnyKeyword } from '@babel/types';

//gives the parsed elements of the component as return
const setUp = (props={}) =>
{
    const component = shallow(<Header {...props} />)
    return component;
}

describe("Header Component",() =>
{
    let component;
    beforeEach(() =>{
        component = setUp();
    })

    it('It should render without errors',() =>
    {
        const wrapper = component.find(`[data-test='headerComponent']`);
        expect(wrapper.length).toBe(1);
    });
}
)