import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
    Cell,
} from "recharts";

const data = [
    { name: "2017", react: 32, angular: 37, vue: 40 },
    { name: "2018", react: 42, angular: 42, vue: 54 },
    { name: "2019", react: 51, angular: 41, vue: 54 },
    { name: "2020", react: 60, angular: 37, vue: 28 },
    { name: "2021", react: 51, angular: 31, vue: 27 },
    { name: "2022", react: 95, angular: 44, vue: 49 },
];

const BarChartBlock = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const activeItem = data[activeIndex];

    const handleHoverEnter = React.useCallback(
        (entry: any, index: number) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );
    return (
        <div className="border border-slate-500 p-5">
            <BarChart width={600} height={300} data={data}>
                <Bar dataKey="vue" radius={10} onMouseOver={handleHoverEnter}>
                    {data.map((entry, index) => (
                        <Cell
                            cursor="pointer"
                            fill={index === activeIndex ? "#888ffe" : "#8884d8"}
                            key={`cell-${index}`}
                        />
                    ))}
                </Bar>
                <XAxis
                    dataKey="name"
                    stroke="#8884d8"
                    dy={12}
                    axisLine={false}
                    axisType="radiusAxis"
                    tickLine={false}
                />
            </BarChart>
        </div>
    );
};

export default BarChartBlock;

/* 

 <div className="border border-slate-500 p-5">
            <BarChart width={600} height={300} data={data}>
                <Bar
                    dataKey="vue"
                    fill="#8884d8"
                    radius={10}
                    barSize={70}
                    cursor="pointer"
                />

                <XAxis
                    dataKey="name"
                    stroke="#8884d8"
                    dy={12}
                    axisLine={false}
                    axisType="radiusAxis"
                    tickLine={false}
                />
            </BarChart>
        </div>

*/
