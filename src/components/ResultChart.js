import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import './ResultChart'; // Stil dosyasını ekleyelim

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ResultChart = ({ data = [] }) => {
  // Verinin bir dizi olup olmadığını kontrol et
  if (!Array.isArray(data)) {
    console.error('Invalid data prop: expected an array');
    return <p>Invalid data provided</p>;
  }

  return (
    <div className="result-chart">
      <h2>Results</h2>
      {data.length > 0 ? (
        <PieChart width={800} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ResultChart;
