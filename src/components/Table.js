import React from "react";

export const Table = ({ diagnostics }) => {
  return (
    <table className="scrolldown">
      <thead className="table_header">
        <tr>
          <th>Problem/Diagnosis</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {diagnostics.map((diagnosis, index) => (
          <tr key={index}>
            <td>{diagnosis.name}</td>
            <td>{diagnosis.description}</td>
            <td>{diagnosis.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
