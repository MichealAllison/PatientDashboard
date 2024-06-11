import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { DiagnosisTcrad } from "./DiagnosisTcrad";
import Respiratory from "../images/respiratory rate.svg";
import Temperature from "../images/temperature.svg";
import Heart from "../images/HeartBPM.svg";
import Chart from "./Chart";
import { ChartCard } from "./ChartCard";
import { Table } from "./Table";

export const PatientHealtStatus = () => {
  const { selectedPatient: patient, loading, error } = useContext(DataContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error.message</p>;

  const { diagnosis_history, diagnostic_list } = patient;
  const latestDiagnosis = diagnosis_history[0];

  return (
    <div className="diagnosishistory">
      <div className="top__diagnosis">
        <div className="chart__session">
          <div className="chart__left">
            <div className="patientchart__title">
              <h3>Blood Pressure</h3>
              <p>Last 6 months </p>
            </div>
            <Chart className="chart" />
          </div>

          <div className="chart__right">
            <ChartCard
              charttitle="Systolic"
              chartvalue={latestDiagnosis.blood_pressure.systolic.value}
              chartlevel={latestDiagnosis.blood_pressure.systolic.levels}
            />
            <ChartCard
              charttitle="Diastolic"
              chartvalue={latestDiagnosis.blood_pressure.diastolic.value}
              chartlevel={latestDiagnosis.blood_pressure.diastolic.levels}
              background="
            charttagcustom"
              style={{ background: "#8c6fe6" }}
            />
          </div>
        </div>

        <div className="top__diagnosiscard">
          <DiagnosisTcrad
            image={Respiratory}
            parametersname="Respiratory Rate"
            value={`${latestDiagnosis.respiratory_rate.value} bpm`}
            range={latestDiagnosis.respiratory_rate.levels}
          />
          <DiagnosisTcrad
            image={Temperature}
            parametersname="Temperature"
            value={`${latestDiagnosis.temperature.value} F`}
            range={latestDiagnosis.temperature.levels}
            background="custom-background"
            style={{ backgroundColor: "#ffe6e9" }}
          />
          <DiagnosisTcrad
            image={Heart}
            parametersname="Heart Rate"
            value={`${latestDiagnosis.heart_rate.value} bpm`}
            range={latestDiagnosis.heart_rate.levels}
            background="custom-background"
            style={{ backgroundColor: "#ffe6e9" }}
          />
        </div>
      </div>

      <div className="bottom__diagnosis">
        <div className="diagnosis">
          <h2>Diagnostic List</h2>
        </div>
        <div className="table__list">
          <Table diagnostics={diagnostic_list} />
        </div>
      </div>
    </div>
  );
};
