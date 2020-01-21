import React from 'react';
import {FizzBuzzConst} from '../../constants/FizzBuzz.const';
import './FizzBuzz.css';

class FizzBuzz extends React.Component {
    
    _checkFizzBuzz = (num) => {
        if(num % FizzBuzzConst.FIZZ_NUM === 0 && num % FizzBuzzConst.BUZZ_NUM === 0) {
            return FizzBuzzConst.FIZZ_BUZZ;
        } else if(num % FizzBuzzConst.FIZZ_NUM === 0) {
            return FizzBuzzConst.FIZZ;
        } else if(num % FizzBuzzConst.BUZZ_NUM === 0) {
            return FizzBuzzConst.BUZZ;
        } else {
            return num;
        }
    }

    _getFizzBuzzList = () => {
        let fizzBuzzList = [];
        for(let i=FizzBuzzConst.FIZZ_BUZZ_MIN_NUM; i<=FizzBuzzConst.FIZZ_BUZZ_MAX_NUM; i++){
            fizzBuzzList.push(<li key={i}>{this._checkFizzBuzz(i)}</li>);
        }
        return fizzBuzzList;
    }
    render = () => {        
        return (
            <ul className="fizz-buzz-list">
                {this._getFizzBuzzList()}
            </ul>
        );
    }
}

export default FizzBuzz;