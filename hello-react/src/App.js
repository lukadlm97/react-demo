import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
    {/*<Message /> */}
    {/* <Greet name='Luka' heroName='Student'>
       <p>This is children props</p>
     </Greet>
     <Greet name='Clark' heroName='Superman'>
       <button>Action</button>
       </Greet>
     <Greet name='Diana' heroName='Superwomen'/>
     <Welcome name='Bruce' heroName='Betman' />
     <Welcome name='Clark' heroName='Superman'/>
     <Welcome name='Luka' heroName='Goman'/>
  */}
    </div>
  );
}

export default App;
