import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

import { Patientcard } from "./Patientcard";
import Search from "../images/search_FILL0_wght300_GRAD0_opsz24.svg";

export const PatientList = () => {
  const { patients, onSelectPatient, selectedPatient } =
    useContext(DataContext);
  return (
    <div className="PatientInfo">
      <div className="TopContent">
        <h2>Patients</h2>
        <img src={Search} alt="img" />
      </div>
      <div className="PatientCardSection">
        {patients.map((patient) => (
          <Patientcard
            key={patient.name}
            image={patient.profile_picture}
            name={patient.name}
            gender={patient.gender}
            age={patient.age}
            onSelectPatient={() => onSelectPatient(patient)}
            isActive={patient.name === selectedPatient.name}
          />
        ))}
      </div>
    </div>
  );
};
