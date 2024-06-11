import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectePatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const onSelectPatient = (patient) => {
    setSelectePatient(patient);
  };

  useEffect(() => {
    const fetchData = async () => {
      const username = "coalition";
      const password = "skills-test";

      const headers = new Headers();
      headers.set("Authorization", "Basic " + btoa(username + ":" + password));
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            method: "GET",
            headers,
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setPatients(result);
        setSelectePatient(result[0]);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        patients,
        selectedPatient,
        loading,
        error,
        onSelectPatient,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
