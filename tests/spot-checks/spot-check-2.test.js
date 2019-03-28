import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import App from '../../src/App';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import { MemoryRouter } from 'react-router-dom';
import { mount, render, shallow, configure} from 'enzyme';

configure({ adapter: new Adapter() });

describe("spotcheck2", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      
      it("Your render function should return an invocation of one of your methods using a conditional statement", () => {
        expect(App.prototype.getMorningGreeting, 'You must define the getMorningGreeting method in your App component').toBeDefined()
        expect(App.prototype.getEveningGreeting, 'You must define the getEvening method in your App component').toBeDefined()
        App.prototype.getEveningGreeting = function () {
            return <div>mock</div>
        }
        App.prototype.getMorningGreeting = function () {
            return <div>mock</div>
        }
        const wrapper = mount(<App />);
        let text = wrapper.find('div').text()
        expect(text).toBe("mock");
    });
})






