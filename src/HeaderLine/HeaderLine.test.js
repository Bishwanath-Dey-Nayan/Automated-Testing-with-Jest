import React from 'react';
import { shallow } from 'enzyme';
import HeaderLine from './HeaderLine'; 


const setUp = (props ={})=>
{
    const component = shallow(<HeaderLine {...props}/>)
    return component;
}

describe('HeaderLine Component',()=>{
    describe('Have props',() =>
    {
        let component;
        beforeEach(() =>
        {
            const props = {
                header:'test header',
                desc:'test description'
            }
          component = setUp(props);
        });

        it('It should render without errors',() =>
        {
            const wrapper = component.find(`[data-test='headerComponent']`);
            expect(wrapper.length).toBe(1);
        });

        it('Should render H1 tag',() =>
        {
            const wrapper = component.find(`[data-test='headerTitle']`);
            expect(wrapper.length).toBe(1);
        });
        
        it("It should render a description",()=>
        {
            const wrapper = component.find(`[data-test='headerDescription']`);
            expect(wrapper.length).toBe(1);
        })

    })

    describe("Do not have props",() =>
    {
        let wrapper;
        beforeEach(() =>
        {
            wrapper = setUp();
        })
        it('This should not be rendered',()=>
        {
            const component = wrapper.find(`[data-test='headerComponent']`);
            expect(component.length).toBe(0);
        })
    })
})