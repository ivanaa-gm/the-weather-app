import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const CustomTooltip = ({ active, payload, label, metric }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#1F1F1F",
          border: "1px solid #464646",
          borderRadius: 6,
          padding: "6px 10px",
          fontSize: 12,
          color: "#FAFAFA",
        }}
      >
        <div>{label}</div>
        <div style={{ fontWeight: "bold", fontSize: 16 }}>
          {payload[0].value}°{metric}
        </div>
      </div>
    );
  }
  return null;
};

const TemperatureChart = ({ data, isFutureDay = false, metric }) => {
  const chartWidth = isFutureDay ? 220 : 320;
  const chartHeight = isFutureDay ? 120 : 180;
  return (
    <LineChart
      width={chartWidth}
      height={chartHeight}
      data={data}
      margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
    >
      <Line
        type="monotone"
        dataKey="temperature"
        stroke="#000000"
        strokeWidth={2}
        dot={false}
        activeDot={false}
      />
      <XAxis
        dataKey="time"
        tick={{ fontSize: 10, fill: "#292929" }}
        axisLine={{ stroke: "#292929" }}
        tickLine={false}
      />
      <YAxis
        tick={{ fontSize: 10, fill: "#292929" }}
        axisLine={{ stroke: "#292929" }}
        tickLine={false}
        domain={["auto", "auto"]}
        width={25}
      />
      <Tooltip
        content={<CustomTooltip metric={metric}/>}
        cursor={{ stroke: "#9D9D9D", strokeWidth: 0.5 }}
      />
    </LineChart>
  );
};

export default TemperatureChart;
