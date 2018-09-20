import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const buttons = [
  { key: 'AC',
    id: 'clear' },
  { key: '/',
    id: 'divide' },
  { key: '*',
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
      calculated: false,
      is_decimal: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleNumber = this.handleNumber.bind(this)
    this.handleOperator = this.handleOperator.bind(this)
  }
  handleNumber(entry, lastChar) {
    if (this.state.just_calculated) {
      this.setState({
        display: '0',
        calculation: entry,
        just_calculated: false
      })
      return null
    }
    if (entry === '0' && lastChar === '0' && this.state.calculation.length <= 1) {
      return null
    }
    if (lastChar === '0' && this.state.calculation.length <= 1) {
      this.setState({
        calculation: entry
      })
      return null
    }
    this.setState({
      calculation: this.state.calculation + entry
    })
    return null
  }
  handleOperator(entry, lastChar) {
    if (this.state.just_calculated) {
      this.setState({just_calculated: false})
    }
    if (/^[*\-+/]+$/.test(lastChar)) {
      this.setState({
        calculation: this.state.calculation.slice(0, -1) + entry
      })
      return null
    }
    this.setState({
      calculation: this.state.calculation + entry
    })
    return null
  }
  handelDecimal(entry, lastChar) {
    if (this.state.just_calculated) {
      this.setState({just_calculated: false})
    }
    let arrStr = this.state.calculation.split(/[*+/-]/)
    let recentNum = arrStr[arrStr.length - 1]
    if (recentNum.indexOf('.') === -1) {
      this.setState({
        calculation: this.state.calculation + entry
      })
    }
    if (lastChar === '.') {
      return null
    } return null
  }
  handleEquals() {
    let evaluation = 0
    if (/^[*\-+/]+$/.test(this.state.calculation.slice(-1))) {
      evaluation = String(eval(this.state.calculation.slice(0, -1)))
    }
    else {
      evaluation = String(eval(this.state.calculation))
    }
    this.setState({
      display: evaluation,
      calculation: evaluation,
      just_calculated: true
    })
  }
  handleClick(event) {
    let entry = event.target.innerHTML
    let lastChar = this.state.calculation.slice(-1)
    let entryisnum = /^\d+$/.test(entry)
    let entryIsOperator = /^[*\-+/]+$/.test(entry)
    // let lastCharisnum = /^\d+$/.test(lastChar)
    if (entry === 'AC') {
      this.setState({
        display: 'display',
        calculation: '0',
        top_display: '',
        just_calculated: false,
        calculated: false,
        is_decimal: false
      })
      return null
    }
    if (entry === '.') {
      this.handelDecimal(entry, lastChar)
      return null
    }
    if (entry === '=') {
      this.handleEquals()
    }
    if (entryisnum) {
      this.handleNumber(entry, lastChar)
      return null
    }
    if (entryIsOperator) {
      this.handleOperator(entry, lastChar)
      return null
    }

    return null
  }

  render() {
    let calc_buttons = buttons.map((obj) => (<button className='button' key= {obj.id}
      id={obj.id} onClick={this.handleClick}>{obj.key}</button>))
    return (
      <div className='calculator'>
        <div id='calculation'>{this.state.display}</div>
        <div id='display'>{this.state.calculation}</div>
        <div className='container'>{calc_buttons}</div>
      </div>
    );
  }
}

export default App;
