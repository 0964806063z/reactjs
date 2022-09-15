import React, { Component, useState } from 'react';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
function getGreeting(user) {
  if (user) {
    return <strong>Hello, {formatName(user)}!</strong>;
  }
  return <strong>Hello, Stranger.</strong>;
}
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

class IntroducingJSX extends Component {
  render() {
   return (
    <>
      <h3>2.1: Embedding Expressions in JSX</h3>
      <div className='final'>Hello, {formatName(user)}!</div>
      <h3>2.2: JSX is an Expression Too</h3>
      <div className='final'>
        <p> Có user: {getGreeting(user)} </p>
        <p> Khoong có user: {getGreeting()} </p>
      </div>
    </>
   )
  }
}

export default IntroducingJSX; // Don’t forget to use export default!