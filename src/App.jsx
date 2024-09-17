import './App.css';
import React from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox';
import TaskList from './components/TaskList';

function App() {
 

  return (
    <>
     <Header />
     <InputBox  />
     <TaskList />
    </>
  );
}

export default App;
