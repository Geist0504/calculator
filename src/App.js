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
    id: 'subtract' },
  { key: '4',
    id: 'four' },
  { key: '5',
    id: 'five' },
  { key: '6',
    id: 'six' },
  { key: '+',
    id: 'add' },
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
  constructor(props) {
    super(props)
    this.state = {
      display: 'display',
      calculation: '0',
      top_display: '',
      just_calculated: false,
      calculated: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event) {
    let entry = event.target.innerHTML
    console.log(entry)
    this.setState({
      calculation: this.state.calculation + entry
    })
  }
  render() {
    let calc_buttons = buttons.map((obj) => (<button className='button' key= {obj.id}
      id={obj.id} onClick={this.handleClick}>{obj.key}</button>))
    return (
      <div className='calculator'>
        <div id='display'>{this.state.display}</div>
        <div id='display'>{this.state.calculation}</div>
        <div className='container'>{calc_buttons}</div>
      </div>
    );
  }
}

export default App;
