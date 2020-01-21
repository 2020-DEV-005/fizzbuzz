import React from 'react';
import { shallow } from 'enzyme';
import FizzBuzz from './';
import {FizzBuzzConst} from '../../constants/FizzBuzz.const';

describe("App component", () => {
  let wrapper = shallow(<FizzBuzz/>);
  it("Appliaction should display 100 list items", () => {
    expect(wrapper.find("ul li").length).toEqual(FizzBuzzConst.FIZZ_BUZZ_MAX_NUM);
  });
  
});

