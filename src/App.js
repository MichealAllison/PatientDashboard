import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { PatientInfo } from './components/PatientInfo';
import { DiagnosisHistory } from './components/DiagnosisHistory';
import { PatientProfile } from './components/PatientProfile';

const App = () => {

  return (
    <div className="App">
      <Header />
      <div className='main'>
      <PatientInfo />
      < DiagnosisHistory />
      < PatientProfile />
      </div>
    </div>
  );
};

export default App;
