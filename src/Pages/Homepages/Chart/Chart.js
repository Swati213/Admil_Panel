import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ title, data, datakey, grid }) => {
    return (
        <div>
            <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 5,
            bottom: 0,
          }}
        >
         {grid &&<CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey={datakey} stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

        </div>
        </div>
    )
}

export default Chart
