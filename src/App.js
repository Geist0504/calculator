import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const buttons = [
  { key: 'AC',
    id: 'clear' },
  { key: '/',
    id: 'divide' },
  { key: 'x',
    id: 'multiply' },
  { key: '7',
    id: 'seven' },
  { key: '8',
    id: 'eight' },
  { key: '9',
    id: 'nine' },
  { key: '-',
    id: 'minus' },
  { key: '4',
    id: 'four' },
  { key: '5',
    id: 'five' },
  { key: '6',
    id: 'six' },
  { key: '+',
    id: 'plus' },
  { key: '1',
    id: 'one' },
  { key: '2',
    id: 'two' },
  { key: '3',
    id: 'three' },
  { key: '=',
    id: 'equals' },
  { key: '0',
    id: 'zero' },
  { key: '.',
    id: 'decimal' }]

class App extends Component {
  render() {
    let calc_buttons = buttons.map((obj) => <button className='button' key= {obj.id} id={obj.id}>{obj.key}</button>)
    return (
        <div className='container'>{calc_buttons}</div>
    );
  }
}

export default App;
