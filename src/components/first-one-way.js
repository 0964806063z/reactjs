import React, { Component, useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';
class Button extends React.Component {
  render() {
    return <button onClick={() => { this.props.onclickFunciton(this.props.counter) }}>{this.props.counter} </button>;
  }
}
class Display extends React.Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}
class DauXanh extends React.Component {
  render() {
    return React.createElement('div',
      null,
      'hello React',
      React.createElement('input', null),
      React.createElement('pre', null, (new Date).toLocaleTimeString()))
  }
}
class FirstOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: new Date().toLocaleTimeString()
    };
    this.incCounter = this.incCounter.bind(this)
  }
  incCounter(q) {
    this.setState({
      count: this.state.count + q
    });
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString().toString()
    });
    this.renderHTML()
  }
  renderHTML() {
    document.getElementById('mount-1').innerHTML = `<div>Hello HTML <input/> <pre>${(new Date).toLocaleTimeString()}</pre></div>`;
  }
  componentDidMount() {
    this.renderHTML()
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  render() {
    return (
      <>
        <h3>1.2: First One-Way Data Flow</h3>
        <div className='flex'>
          <Button counter={1} onclickFunciton={this.incCounter} />
          <Button counter={5} onclickFunciton={this.incCounter} />
          <Button counter={10} onclickFunciton={this.incCounter} />
          <Button counter={20} onclickFunciton={this.incCounter} />
          <Button counter={50} onclickFunciton={this.incCounter} />
          <Button counter={100} onclickFunciton={this.incCounter} />
        </div>
        <Display message={this.state.count} />
        <h3>1.3: Tree Reconciliation in Action </h3>
        <div id="mount-1" className='mout-demo'> </div>
        <div id="mount-2" className='mout-demo'><DauXanh /></div>
      </>

    )
  }
}

export default FirstOne; // Don’t forget to use export default!