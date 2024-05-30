import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { PatientInfo } from './components/PatientInfo';

const App = () => {

  return (
    <div className="App">
      <Header />
      <PatientInfo />
    </div>
  );
};

export default App;
