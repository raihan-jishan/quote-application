/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const BarChart = ({ chartData }) => {
  return (
    <div>
      <Bar data={chartData} horizontal="true" />
    </div>
  );
};

export default BarChart;
