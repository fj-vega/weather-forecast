import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CustomTooltip = ({ active, payload, units }) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const data = payload[0].payload;

  return (
    <div className="p-2 bg-white rounded-lg shadow">
      <div className="text-lg font-bold">{data.time}</div>
      <div className="flex items-center mb-2">
        <img className="w-10 h-10 mr-1" src={data.icon} alt="Weather Icon" />
        <div>{data.description}</div>
      </div>
      <div className="mb-1">
        Temperature: {data.temperature}
        {units.temperature}
      </div>
      <div className="mb-1">
        Rain probability: {data.rainProbability}
        {units.rainProbability}
      </div>
      <div className="mb-1">
        Wind Speed: {data.windSpeed}
        {units.windSpeed}
      </div>
      <div className="mb-1">
        Humidity: {data.humidity}
        {units.humidity}
      </div>
    </div>
  );
};

const legendLabels = {
  temperature: "Temperature",
  rainProbability: "Rain Probability",
  windSpeed: "Wind Speed",
  humidity: "Humidity",
};

const ForecastGraph = ({ forecastData, units }) => {
  return (
    <LineChart width={800} height={400} data={forecastData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip content={<CustomTooltip units={units} />} />
      <Legend formatter={(value) => legendLabels[value]} />
      <Line
        type="monotone"
        dataKey="temperature"
        stroke="#FF6347"
        strokeWidth={6}
        dot={false}
      />
      <Line
        type="monotone"
        dataKey="rainProbability"
        stroke="#3798f7"
        strokeWidth={4}
        dot={false}
      />
      <Line
        type="monotone"
        dataKey="windSpeed"
        stroke="#82ca9d"
        strokeWidth={3}
        dot={false}
      />
      <Line
        type="monotone"
        dataKey="humidity"
        strokeWidth={3}
        stroke="#c4c4c4"
        dot={false}
      />
    </LineChart>
  );
};

export default ForecastGraph;
