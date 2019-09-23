import React from 'react';
import { shallow } from 'enzyme';
import { checkProps } from '../../Utils/index';
import ListItem from './index';



describe('ListItem Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some Test'
            };
            const propErr = checkProps(ListItem, expectedProps);
            expect(propErr).toBeUndefined();
        });
    });

    describe('Component Renders', () => {
        let component;
        beforeEach(() => {
            const props = {
                title: 'example',
                desc: 'Some Test'
            }
            component = shallow(<ListItem {...props} />)
        });
        it('should render component', () => {
            const wrapper = component.find(`[data-test='listComponent']`);
            expect(wrapper.length).toBe(1);
        });

    });

});