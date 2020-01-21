import React from 'react';
import {FizzBuzzConst} from '../../constants/FizzBuzz.const';

class FizzBuzz extends React.Component {
    _getFizzBuzzList = () => {
        let fizzBuzzList = [];
        for(let i=FizzBuzzConst.FIZZ_BUZZ_MIN_NUM; i<=FizzBuzzConst.FIZZ_BUZZ_MAX_NUM; i++){
            fizzBuzzList.push(<li key={i}>{i}</li>);
        }
        return fizzBuzzList;
    }
    render = () => {        
        return (
            <ul>
                {this._getFizzBuzzList()}
            </ul>
        )
    }
}

export default FizzBuzz;