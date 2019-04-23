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

describe("exercise1", () => {
    it('Application should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
      });      
      it('The first div should say, Tesla makes 140 every year', () => {
          const EXPECTED_TEXT = "Tesla makes 140 every year";
          const wrapper = mount(<App />)
          let teslaDiv = wrapper.find('#Tesla')
          expect(teslaDiv.exists(), "There should be a div with an id of 'Tesla'").toBeTruthy()
          let teslaText = teslaDiv.text().trim();
          expect(teslaText.toLowerCase(), `The text should read '${EXPECTED_TEXT}'. Instead we found '${teslaText}'`).toBe(EXPECTED_TEXT.toLowerCase());
      });     
      it('The second div should say, Microsoft makes 300 every year', () => {
        const EXPECTED_TEXT = "Microsoft makes 300 every year";
        const wrapper = mount(<App />);          
        let microsoftDiv = wrapper.find('#Microsoft')
        expect(microsoftDiv.exists(), "There should be a div with an id of 'Microsoft'").toBeTruthy()
        let microsoftText = microsoftDiv.text().trim();
        expect(microsoftText.toLowerCase(), `The text should read '${EXPECTED_TEXT}'. Instead we found ${microsoftText}`).toBe(EXPECTED_TEXT.toLowerCase());
      });
      it('The third div should say, Google makes 600 every year', () => {
        const EXPECTED_TEXT = "Google makes 600 every year";
        const wrapper = mount(<App />); 
        let googleDiv = wrapper.find('#Google')
        expect(googleDiv.exists(), "There should be a div with an id of 'Google'").toBeTruthy()
        let googleText = googleDiv.text().trim();
        expect(googleText, `The text should read '${EXPECTED_TEXT}'. Instead we found ${googleText}`).toBe(EXPECTED_TEXT.toLowerCase());
    });
})






