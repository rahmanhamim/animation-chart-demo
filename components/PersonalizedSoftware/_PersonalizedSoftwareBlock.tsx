import Image from "next/image";
import React from "react";
import styles from "./PersonalizedSoftwareBlock.module.css";

const PersonalizedSoftwareBlock = () => {
    return (
        <div>
            <p className="text-3xl">
                The process behind{" "}
                <span className="text-sky-500">personalized software</span>
            </p>
            <div
                className={`${styles.boxContainer} mx-auto w-fit mt-12 relative top-4 opacity-60 hover:top-0 hover:opacity-100 group transition-all duration-700`}
            >
                <Image
                    src="/img-software.png"
                    width={376}
                    height={250}
                    alt="img"
                />

                <div className="absolute top-[30%] right-[150%] opacity-60 pointer-events-none group-hover:pointer-events-auto group-hover:top-0 group-hover:right-[110%] group-hover:opacity-100 transition-all duration-700">
                    <h3 className="text-sky-500 text-6xl">Transform</h3>
                    <p className="max-w-sm">
                        In the transformation phase, data is processed to make
                        it perform consistently with its intended use case.
                        After the data is extracted and uploaded into the
                        pipeline the data needs to be transformed into a
                        normalized format.
                    </p>
                </div>

                <div className="absolute top-[30%] left-[150%] opacity-60 pointer-events-none group-hover:pointer-events-auto group-hover:top-0 group-hover:left-[110%] group-hover:opacity-100 transition-all duration-700">
                    <h3 className="text-sky-500 text-6xl">Transform</h3>
                    <p className="max-w-sm">
                        In the transformation phase, data is processed to make
                        it perform consistently with its intended use case.
                        After the data is extracted and uploaded into the
                        pipeline the data needs to be transformed into a
                        normalized format.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PersonalizedSoftwareBlock;

/* 

 
*/

/* 
<div className="justify-self-center pointer-events-none posi">
                    <h3 className="text-sky-500 text-6xl">Extract</h3>
                    <p className="max-w-xs">
                        Data is extracted from one or multiple data sources. It
                        is then held in temporary storage, where the next two
                        steps are executed.
                    </p>
                </div>
*/
