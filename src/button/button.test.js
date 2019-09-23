import React from 'react';
import {shallow} from 'enzyme';
import {checkProps} from '../../Utils/index';
import SharedButton from './index';

describe('sharedButton Component',() =>
{
    //checking wheather the component render perfectly with props
    describe('Checking Proptypes',() =>
    {
        it('Should not throw a warning',()=>
        {
            //creating the expectedprops
            const expectedProps = {
                buttonTest:'Example Button Test',
                emitEvent:() =>
                {}
            }
            //checking the propError
            const propsError = checkProps(SharedButton,expectedProps);
            expect(propsError).toBeUndefined();
        }); 
    })
})

describe('Rnders',() =>
{
 let wrapper;
 //runs this method before every test
 beforeEach(() =>
 {
     //creating a props as the component expect props to be passed
     const props = {
         buttonText : 'Example Button Text',
         emitEvent:() =>
         {

         }
     };
     //parsing every component to the wrapper
     wrapper = shallow(<SharedButton {...props} />);
 });

 it('Should render a button',() =>
 {
    // checking wheather the component contains any data-test(should be unique) variable like 'buttonComponent' 
    const component = wrapper.find(`[data-test='buttonComponent']`)
    expect(component.length).toBe(1);
 });
});