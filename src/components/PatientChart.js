import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

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
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['Oct,2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024',];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 100, max: 1000 })),
            borderColor: '#C26EB4',
            backgroundColor: '#E66fd2',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 100, max: 1000 })),
            borderColor: '#7E6CAB',
            backgroundColor: '#8C6FE6',
        },
    ],
};


const PatientChart = () => {
    return (
        <div><Line options={options} data={data} /></div>
    )
}

export default PatientChart