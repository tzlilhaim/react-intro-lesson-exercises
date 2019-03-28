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

describe("spotcheck1", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      
      it("Your render function should return a JSX expression that calls your method inside an h1 tag", () => {
        expect(App.prototype.getStuff, 'You must define the getStuff method in your App component').toBeDefined()
        App.prototype.getStuff = function () {
            return "mock"
        }
        const wrapper = mount(<App />);
        let header = wrapper.find('h1').text()
        expect(header).toContain("mock");
    });
})






