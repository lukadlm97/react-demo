import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo';
import ParentCompRef from './components/ParentCompRef';
import FokusInput from './components/FokusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User'
import CounterExp from './components/CounterExp'
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">

    <UserProvider value = 'Luka'>
      <ComponentC />
    </UserProvider>

     {/* 
      <CounterExp
        render= {(count,incrementCount)=>
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        } />
        <CounterExp
        render = {(count,incrementCount) => 
          <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        } />
      <ClickCounterTwo />
      <HoverCounterTwo />
      <User name = {(isLoggedIn) => isLoggedIn? 'Luka':'Guest'}/>
      <HoverCounter></HoverCounter>
    <ClickCounter name="Luka"></ClickCounter>
      <ErrorBoundary>
        <Hero heroName="Betman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
       </ErrorBoundary>
     <PortalDemo></PortalDemo>
     <FRParentInput />
      <ParentCompRef />
      <ParentComp />
      <RefsDemo />
      <Table />
      <FragmentDemo />
      <LifecycleA />
      <Form />
      <Stylesheet primary={true} />
      <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Success</h2>
      <Inline />
      <NameList />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <FunctionClick />
      <ClassClick />
      <Welcome name='Luka' heroName='Student' />
      <Greet name='Luka' heroName='Superman' />
     <Counter/>
     */}
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
