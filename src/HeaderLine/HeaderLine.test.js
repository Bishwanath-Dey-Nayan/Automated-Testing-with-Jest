import React from 'react';
import { shallow } from 'enzyme';
import HeaderLine from './HeaderLine'; 
import CheckPropTypes from 'check-prop-types';


const setUp = (props ={})=>
{
    const component = shallow(<HeaderLine {...props}/>)
    return component;
}

describe('HeaderLine Component',()=>{
    
    describe('Checking PropTypes',() =>
    {
        it('Should not thorow a error',() =>
        {
            const expectedProps = {
                header:'Test Header',
                desc:'Test Description',
                tempArray:[{
                    fName:'Joe',
                    lName:'Doe',
                    email:'Joe@gmail.com',
                    age:12,
                    onLineStatus:true
                }]
            }
            const propsErr = CheckPropTypes(HeaderLine.PropTypes,expectedProps,"props",HeaderLine.name);
            expect(propsErr).toBeUndefined();

        })
    })


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