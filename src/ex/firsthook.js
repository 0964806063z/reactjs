import React, { Component, useState } from 'react';
function Button(){
  const [counter, setCounter] = useState(0);
  return (
    <button onClick={() => setCounter(counter + 1)}> {counter}  </button>)
}
class FirstHook extends Component {
  render() {
   return (
    <>
      <h3>1.1: First React Hook</h3>
      <Button />
    </>
   )
  }
}

export default FirstHook; // Don’t forget to use export default!