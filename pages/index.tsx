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
import Image from "next/image";

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
      <motion.div
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
                className="text-6xl font-extrabold textGradient bg-clip-text"
              >
                ANIMATING GRADIENT
              </motion.h1>
            </div>
            <div className="grid grid-cols-2 gap-14 py-8 ">
              <div>
                <LineChartBlock />
              </div>
              <div>
                <BarChartBlock />
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </>
  );
}
