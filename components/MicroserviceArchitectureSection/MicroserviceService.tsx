import Image from "next/image";
import React from "react";

const data = [
    {
        title: "Split into small and controllable services",
        id: "1",
    },
    {
        title: "Distribute to smaller development teams",
        id: "2",
    },
    {
        title: "Resulting in higher quality and lower costs",
        id: "3",
    },
];

const MicroserviceService = () => {
    return (
        <div className="flex justify-between gap-8 mt-10">
            {data.map((item, index) => {
                return (
                    <div key={index} className="relative">
                        <div className="absolute top- -left-5 h-[40%] w-1 bg-sky-600"></div>
                        <h2 className="text-3xl max-w-[332px] leading-[40px]">
                            {item.title}
                        </h2>
                    </div>
                );
            })}
        </div>
    );
};

export default MicroserviceService;
