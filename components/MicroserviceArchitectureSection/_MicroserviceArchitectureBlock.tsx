import React from "react";
import MapAnimatedSvg from "../Shared/MapAnimatedSvg";
import MicroserviceContent from "./MicroserviceContent";
import MicroserviceService from "./MicroserviceService";

const MicroserviceArchitectureBlock = () => {
    return (
        <div className="p-10 relative z-10">
            <MicroserviceContent />
            <MicroserviceService />
            <div className="absolute top-0 -right-56 -z-10">
                <MapAnimatedSvg />
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50"></div>
            </div>
        </div>
    );
};

export default MicroserviceArchitectureBlock;
