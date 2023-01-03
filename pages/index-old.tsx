import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ContactFormBlock from "../components/ContactForm/_ContactFormBlock";
import LineChartBlock from "../components/LineCharts/LineChartBlock";
import MicroserviceArchitectureBlock from "../components/MicroserviceArchitectureSection/_MicroserviceArchitectureBlock";
import ParallaxAnimSection from "../components/Parallax/ParallaxAnimSection";
import PersonalizedSoftwareBlock from "../components/PersonalizedSoftware/_PersonalizedSoftwareBlock";
// import BarChartBlock from "../components/BarCharts/BarChartBlock";
// import RadialChartBlock from "../components/RadialCharts/RadialChartBlock";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const BarChartBlock = dynamic(
    () => import("../components/BarCharts/BarChartBlock"),
    {
        ssr: false,
    }
);
const RadialChartBlock = dynamic(
    () => import("../components/RadialCharts/RadialChartBlock"),
    {
        ssr: false,
    }
);

export default function Home() {
    const containerVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
                when: "beforeChildren",
            },
        },
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: -10,
        },
        visible: {
            opacity: 1,
            y: 10,
            transition: {
                type: "spring",
                stiffness: 200,
            },
        },
    };

    return (
        <>
            <Parallax pages={7} className="">
                <ParallaxLayer offset={0} speed={0.5}>
                    <p className="text-7xl text-teal-800 border h-full flex items-center justify-center">
                        Scroll down
                    </p>
                </ParallaxLayer>
                <ParallaxLayer sticky={{ start: 1, end: 3 }}>
                    <div className="container mx-auto border-2 border-blue-600 grid grid-cols-12 h-full items-center">
                        <p className="col-span-6 border-2 text-5xl text-teal-600">
                            I&apos;m a sticky layer
                        </p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1}>
                    <div className="container mx-auto border-4 border-red-600 grid grid-cols-12 h-full items-center">
                        <p className="col-span-6"></p>
                        <p className=" col-span-6 border-2 text-5xl text-teal-600">
                            I&apos;m a Right 1
                        </p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={1}>
                    <div className="container mx-auto border border-red-600 grid grid-cols-12 h-full items-center">
                        <p className="col-span-6"></p>
                        <p className=" col-span-6 border-2 text-5xl text-teal-600">
                            I&apos;m a Right 2
                        </p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={1}>
                    <div className="container mx-auto border-4 border-red-600 grid grid-cols-12 h-full items-center">
                        <p className="col-span-6"></p>
                        <p className=" col-span-6 border-2 text-5xl text-teal-600">
                            I&apos;m a Right 3
                        </p>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    factor={3}
                    offset={4}
                    className="bg-black border-2 border-red-500 h-[2000px]"
                >
                    <main className="container mx-auto">
                        <div className="relative m-[1px] rounded-md border border-transparent p-4 pb-[700px]">
                            <div className="bg-slate-100 p-10 pb-14 rounded-md w-fit mx-auto">
                                <motion.h1
                                    variants={childVariants}
                                    className="text-6xl font-extrabold textGradient"
                                >
                                    ANIMATING GRADIENT
                                </motion.h1>
                            </div>
                            <div className="grid grid-cols-2 gap-14 py-8">
                                <div>
                                    <LineChartBlock />
                                </div>
                                <div>
                                    <BarChartBlock />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-14 py-8 my-24">
                                <div className="border">
                                    <RadialChartBlock />
                                </div>
                                <div className="p-4">
                                    <ContactFormBlock filter="200px" />
                                </div>
                            </div>
                            <MicroserviceArchitectureBlock />
                            <PersonalizedSoftwareBlock />
                        </div>
                    </main>
                </ParallaxLayer>
            </Parallax>
            {/* <motion.div
                variants={containerVariant}
                initial="hidden"
                animate="visible"
                className="bg-black overflow-hidden text-white min-h-screen p-8"
            >
                <main className="container mx-auto">
                    <div className="relative m-[1px] bg-black rounded-md border border-transparent p-4 pb-[700px]">
                        <div className="bg-slate-100 p-10 pb-14 rounded-md w-fit mx-auto">
                            <motion.h1
                                variants={childVariants}
                                className="text-6xl font-extrabold textGradient"
                            >
                                ANIMATING GRADIENT
                            </motion.h1>
                        </div>
                        <div className="grid grid-cols-2 gap-14 py-8">
                            <div>
                                <LineChartBlock />
                            </div>
                            <div>
                                <BarChartBlock />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-14 py-8 my-24">
                            <div className="border">
                                <RadialChartBlock />
                            </div>
                            <div className="p-4">
                                <ContactFormBlock filter="200px" />
                            </div>
                        </div>
                        <MicroserviceArchitectureBlock />
                        <PersonalizedSoftwareBlock />
                    </div>
                </main>
            </motion.div> */}
        </>
    );
}
