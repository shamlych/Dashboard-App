import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Group A', value: 640} ,
    { name: 'Group B', value: 740 },
    { name: 'Group C', value: 800 },
    { name: 'Group D', value: 880 },
  ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function TrafficSourceChart() {
  return (
  <div>
   <PieChart width={250} height={300}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={80}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
  </div>
  );
}

export default TrafficSourceChart;
