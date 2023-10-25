import { useRef } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function Card(props) {
  // reference for the second div
  const refDiv = useRef();
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
  ];
  return (
    <div className="flex flex-col w-screen md:w-[28vw] h-[100vw] md:h-[28vw] p-1 rounded-md bg-red-400">
      <div className="py-2 text-center text-white">{props.title}</div>
      <div ref={refDiv} className="grow p-2 rounded-md bg-white">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
