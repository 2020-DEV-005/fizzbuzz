import React from 'react';
import { shallow } from 'enzyme';
import App from './';
import FizzBuzz from '../FizzBuzz/';
import {FizzBuzzConst} from '../../constants/FizzBuzz.const';

describe("App component", () => {
  let wrapper = shallow(<App/>);
  it("Appliaction should have the correct title", () => {
    expect(wrapper.find("header h2").text()).toEqual(FizzBuzzConst.APP_TITLE);
  });
  it("App component should render the FizzBuzz component", () => {
    expect(wrapper.find(FizzBuzz)).toBeDefined();
  });
});

