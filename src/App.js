import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { PatientList } from "./components/PatientList";
import { PatientHealtStatus } from "./components/PatientHealtStatus";
import { PatientDetails } from "./components/PatientDetails";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <PatientList />
        <PatientHealtStatus />
        <PatientDetails />
      </div>
    </div>
  );
};

export default App;
