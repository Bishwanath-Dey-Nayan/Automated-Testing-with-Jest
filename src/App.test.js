import rewire from "rewire"
import { shallow } from "enzyme"
import { testStore } from "../Utils/index"
import React from "react"



const App = rewire("./App")
const mapStateToProps = App.__get__("mapStateToProps")
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

// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ posts: [1.0, 1.0, 0.0] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ posts: [-0.5, 0.0, -1.0] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ posts: [-1.0, -29.45, -0.5] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ posts: [1.0, 0.0, 0.5] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ posts: [10.23, 1.0, 10.0] })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
