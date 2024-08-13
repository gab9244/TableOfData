// src/components/PivotChartView.jsx

import { BarChart, Bar, Tooltip, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';

export const PivotChartView = ({ data }) => {
  // Transforme os dados conforme necessário para o gráfico

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};

PivotChartView.propTypes = {
    data: PropTypes.array.isRequired
  };