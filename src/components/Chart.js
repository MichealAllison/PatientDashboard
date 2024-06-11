import React, { useContext, useState, useEffect } from "react";
import _ from "lodash";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DataContext } from "../context/DataProvider";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "Oct,2023",
  "Nov, 2023",
  "Dec, 2023",
  "Jan, 2024",
  "Feb, 2024",
  "Mar, 2024",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      fill: false,
      data: [120, 118, 160, 110, 150, 159, 178],
      borderColor: "#C26EB4",
      borderWidth: 2,
      pointBorderWidth: 8,
      pointBorderColor: "#E66FD2",
      backgroundWidth: 14,
      lineTension: "0.4",
    },
    {
      label: "Dataset 2",
      fill: false,
      data: [110, 61, 107, 90, 70, 78],
      borderColor: "#7E6CAB",
      borderWidth: 2,
      pointBorderWidth: 8,
      pointBorderColor: "#8c6fe6",
      backgroundWidth: 14,
      lineTension: "0.4",
    },
  ],
};

const Chart = () => {
  const { selectedPatient } = useContext(DataContext);

  const { diagnosis_history } = selectedPatient;

  const [chartData, setChartData] = useState(data);

  useEffect(() => {
    const dataLabel = [];
    const systolicValues = [];
    const diastolicValues = [];

    diagnosis_history.slice(0, 7).forEach((history) => {
      systolicValues.push(history.blood_pressure.systolic.value);
      diastolicValues.push(history.blood_pressure.diastolic.value);
      dataLabel.push(`${history.month.substr(0, 3)}, ${history.year}`);
    });

    setChartData((prevData) => {
      const newData = _.cloneDeep(prevData);
      newData.labels = dataLabel;
      newData.datasets[0].data = systolicValues;
      newData.datasets[1].data = diastolicValues;
      return newData;
    });
  }, [selectedPatient]);
  return (
    <div className="chart__line">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default Chart;
