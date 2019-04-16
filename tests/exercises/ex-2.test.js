import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import App from '../../src/App';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { MemoryRouter } from 'react-router-dom';
import { mount, render, shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe("exercise2", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it("Passing a parameter above 30 should create a div with a class of 'hell-scape'", () => {
        let input = 40
        let expectedOutput = 'hell-scape'
        expect(App.prototype.getClassName, 'You must define the getClassName method in your App component').toBeDefined()
        // add failure message with actual vs. expected value
        let actualValue = App.prototype.getClassName(input);
        expect(App.prototype.getClassName(input), `getClassName should return ${expectedOutput} but it returned ${actualValue}`).toBe(expectedOutput)
    });
    it("Passing a parameter between 15 and 30 should create a div with a class of 'fair'", () => {
        let input = 20
        let expectedOutput = 'fair'
        expect(App.prototype.getClassName, 'You must define the getClassName method in your App component').toBeDefined()
        expect(App.prototype.getClassName(input)).toBe(expectedOutput)
    });
    it("Passing a parameter below 15 should create a div with a class of 'freezing'", () => {
        let input = 10
        let expectedOutput = 'freezing'
        expect(App.prototype.getClassName, 'You must define the getClassName method in your App component').toBeDefined()
        expect(App.prototype.getClassName(input)).toBe(expectedOutput)
    });
    it("Your render function should return a div with a className equal to what your getClassName function is returning", () => {
        expect(App.prototype.getClassName, 'You must define the getClassName method in your App component').toBeDefined()
        App.prototype.getClassName = function () {
            return "mock"
        }
        const wrapper = mount(<App />);
        expect(wrapper.find('div').hasClass('mock')).toBe(true);
    });

})






