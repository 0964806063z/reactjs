
import './styles/App.css';
import React, { Component } from 'react';
import FirstHook from './components/FirstHook';
import FirstOne from './components/FirstOne';
import CardsApp from './components/CardsApp';
import StarGame from './components/StarGame';
import ConditionalRendering from './components/ConditionalRendering';
import Form from './components/Form';
import LiftingStateUp from './components/LiftingStateUp';
import CompositionInheritance from './components/CompositionInheritance';
function App() {
  return (
    <div className="">
      <header className="">
        <div className='container'>
          <h1> Bài tập</h1>
        </div>
      </header>
      <main>
        <div className='container'>
          <h2>1: The Basics</h2>
          <FirstHook />
          <FirstOne />
          <h2>2: The GitHub Cards App</h2>
          <CardsApp />
          <h2>3: The Start Match Game</h2>
          <StarGame />
          <h1> Bài tập MAIN CONCEPTS</h1>
          <h2>1. Hello World</h2>
          <h2>2. Introducing JSX</h2>
          <p>- Phần này e áp dụng hết trên mấy cái app ở trên rồi nha</p>
          <h2>3. Rendering Elements</h2>
          <p>- Demo như 1.3: Tree Reconciliation in Action</p>
          <h2>4. Components and Props</h2>
          <p>- Defaul tất cả function e đều dùng class  props hết rồi nha.</p>
          <h2>5. State and Lifecycle</h2>
          <p>- Defaul tất cả function e đều dùng class có state và Lifecycle hết rồi nha. Demo như 1.3</p>
          <h2>6. Handling Events</h2>
          <p>- Demo 2: The GitHub Cards App. 3: The Start Match Game</p>
          <h2>7. Conditional Rendering</h2>
          <ConditionalRendering />
          <h2>8. Lists and Keys</h2>
          <p>Áp dụng ở <strong>3: The Start Match Game</strong></p>
          <h2>9. Forms</h2>
          <Form />
          <h2>10. Lifting State Up</h2>
          <LiftingStateUp />
          <h2>11. Composition vs Inheritance</h2>
          <CompositionInheritance />
        </div>

      </main>
    </div>
  );
}

export default App;
