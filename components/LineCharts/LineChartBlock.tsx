import React from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";

const data = [
    { name: "2017", react: 32, angular: 37, vue: 60 },
    { name: "2018", react: 42, angular: 42, vue: 54 },
    { name: "2019", react: 51, angular: 41, vue: 54 },
    { name: "2020", react: 60, angular: 37, vue: 28 },
    { name: "2021", react: 51, angular: 31, vue: 27 },
    { name: "2022", react: 95, angular: 44, vue: 49 },
];

const LineChartBlock = () => {
    return (
        <div className="border">
            <LineChart width={600} height={300} data={data}>
                <Line
                    dot={false}
                    type="natural"
                    dataKey="react"
                    stroke="#eaddef"
                    strokeWidth={2}
                ></Line>
                <Line
                    dot={false}
                    type="natural"
                    dataKey="angular"
                    stroke="#e82D2Faa"
                    strokeWidth={2}
                ></Line>
                <Line
                    dot={false}
                    type="natural"
                    dataKey="vue"
                    stroke="#3FB27F"
                    strokeWidth={2}
                ></Line>
                <CartesianGrid
                    stroke="#ccc"
                    strokeDasharray="4 4"
                    strokeWidth="0.5"
                    horizontal={true}
                    vertical={false}
                />
                <XAxis dataKey="name" stroke="teal" />
                <YAxis stroke="#3FB27F" />
                <Tooltip
                    cursor={{ strokeDasharray: "3" }}
                    contentStyle={{ display: "none" }}
                />
                {/* <Legend /> */}
            </LineChart>
        </div>
    );
};

export default LineChartBlock;
