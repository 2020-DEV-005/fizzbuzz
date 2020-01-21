import React from 'react';
import { shallow } from 'enzyme';
import FizzBuzz from './';
import {FizzBuzzConst} from '../../constants/FizzBuzz.const';

describe("App component", () => {
  let wrapper = shallow(<FizzBuzz/>);
  let instance = wrapper.instance();

  it("Appliaction should display 100 list items", () => {
    expect(wrapper.find("ul li").length).toEqual(FizzBuzzConst.FIZZ_BUZZ_MAX_NUM);
  });
  
  it('Should return FizzBuzz if the number is divisble by both 3 and 5', () => {
    expect(instance._checkFizzBuzz(15)).toEqual(FizzBuzzConst.FIZZ_BUZZ);
  });

  it('Should return Fizz if the number is divisble by 3 but not 5', () => {
    expect(instance._checkFizzBuzz(9)).toEqual(FizzBuzzConst.FIZZ);
  });

  it('Should return Buzz if the number is divisble by 5 but not 3', () => {
    expect(instance._checkFizzBuzz(10)).toEqual(FizzBuzzConst.BUZZ);
  });

  it('Should return the same number if the number is not divisble by both 3 and 5', () => {
    expect(instance._checkFizzBuzz(7)).toEqual(7);
  });

  it('The list item should display fizz buzz correctly', () => {
    expect(wrapper.find("ul li").at(2).text()).toEqual(FizzBuzzConst.FIZZ);
    expect(wrapper.find("ul li").at(4).text()).toEqual(FizzBuzzConst.BUZZ);
    expect(wrapper.find("ul li").at(14).text()).toEqual(FizzBuzzConst.FIZZ_BUZZ);
    expect(wrapper.find("ul li").at(6).text()).toEqual("7");
  });

});
