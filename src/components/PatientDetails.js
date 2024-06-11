import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
// import PatientImage from "../images/Patient Image.png";
import { Details } from "./Details";
import Calandar from "../images/Calandar.png";
import Gender from "../images/Gender.png";
import Phone from "../images/Phone.png";
import Secure from "../images/Secure.png";
import Download from "../images/download_FILL0_wght300_GRAD0_opsz24 (1).svg";
import { LabResult } from "./LabResult";

export const PatientDetails = () => {
  const { selectedPatient, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error.message</p>;

  return (
    <div className="patientprofile">
      <div className="top__patientprofile">
        <img
          src={selectedPatient.profile_picture}
          alt="img"
          height="150px"
          width="150px"
        />
        <h2>{selectedPatient.name}</h2>

        <div className="details__list">
          <Details
            detail="Date Of Birth"
            image={Calandar}
            detail2={selectedPatient.date_of_birth}
          />
          <Details
            detail="Gender"
            image={Gender}
            detail2={selectedPatient.gender}
          />
          <Details
            detail="Contact Info."
            image={Phone}
            detail2={selectedPatient.phone_number}
          />
          <Details
            detail="Emergency"
            image={Phone}
            detail2={selectedPatient.emergency_contact}
          />
          <Details
            detail="Insurance Provider"
            image={Secure}
            detail2={selectedPatient.insurance_type}
          />
        </div>
        <button>Show All Information</button>
      </div>

      <div className="bottom__patientprofile">
        <div className="lab__result">
          <h2>Lab Result</h2>
        </div>
        <div className="lab__resultlist">
          {selectedPatient.lab_results.map((result, index) => (
            <LabResult key={index} result={result} image={Download} />
          ))}
        </div>
      </div>
    </div>
  );
};
