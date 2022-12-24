import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
    {
        name: "25-29",
        uv: 26.69,
        pv: 4567,
        fill: "#83a6ed",
    },
    {
        name: "30-34",
        uv: 15.69,
        pv: 1398,
        fill: "#8dd1e1",
    },
    {
        name: "35-39",
        uv: 8.22,
        pv: 9800,
        fill: "#82ca9d",
    },
];

const style = {
    top: 0,
    left: 350,
    lineHeight: "24px",
};
const RadialChartBlock = () => {
    return (
        <div>
            <RadialBarChart
                width={500}
                height={300}
                cx={150}
                cy={150}
                innerRadius={20}
                outerRadius={100}
                barSize={15}
                data={data}
            >
                <RadialBar
                    // label={{ position: "inside", fill: "#fff" }}
                    background={{ fill: "#010332" }}
                    color="#f33"
                    dataKey="uv"
                />
                <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout="vertical"
                    verticalAlign="middle"
                    wrapperStyle={style}
                />
            </RadialBarChart>
        </div>
    );
};

export default RadialChartBlock;
